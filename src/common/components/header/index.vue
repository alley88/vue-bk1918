<template>
    <div class="header">
        <v-touch
             class="icon_left"
             tag="div"
             @tap="handleBack()"
             >
             <i class="iconfont" v-if="icon">&#xe606;</i>
        </v-touch>
        <h2>{{title}}</h2>
    </div>
</template>


<script>
export default {
   name:"Header",
   props:{
       title:{
           type:String,
           default:"猫眼电影"
       },
       icon:{
           type:Boolean
       }
   },
   methods:{
       handleBack(){
           this.$router.back();
       }
   }

}
</script>

<style>
    .header{
        width: 100%;
        height: .88rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #c33;
    }

    .header .icon_left{
        position: absolute;
        left:.2rem;
    }

    .header .icon_left i{
        font-size: .4rem;
    }
</style>