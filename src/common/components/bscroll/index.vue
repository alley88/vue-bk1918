<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="loadingFlag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "Alley-scroll",
  data(){
      return{
          loadingFlag:false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //开启下拉刷新
      pullDownRefresh: true,
      //开启上拉加载更多
      pullUpLoad: true,
      //scroll事件的配置项
      probeType:1
    });
  },
  methods: {
    handleScroll(){
        this.scroll.on("scroll",this.handleScrollCb)
    },
    handleScrollCb({y}){
      if(y>50 && (!this.loadingFlag)){
            this.loadingFlag = true;
        }
    },
    //下拉刷新
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
      });
    },
    handlefinishPullDown() {
      //通知better-scroll进行下一次下拉刷新
      this.scroll.finishPullDown();
      //重新计算better-scroll;
      this.scroll.refresh();
        setTimeout(()=>{
            this.loadingFlag = false;
        },500)
    }
  }
};
</script>


<style>
.wrapper,
.scroll_container {
  height: 100%;
  overflow: hidden;
}
.scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
</style>