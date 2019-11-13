<template>
  <div id="app">
    <keep-alive exclude="Detail,search">
        <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.flag"/>

  </div>
 
</template>
<script>
import TabBar from "@common/components/tabBar"
import AlleyUI from "@lib";
export default {
  name:"App",
  components:{
    TabBar,
  },
  created(){
      AlleyUI.MessageBox({
        title:"城市信息",
        content:"北京",
        ok:()=>{
          alert(1)
        }
      })
  }
}
</script>
<style lang="scss">
.page{
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  bottom:0;
  right: 0;
  padding-bottom: 1rem;
}
</style>
