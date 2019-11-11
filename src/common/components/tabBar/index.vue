<template>
    <div id="footer">
        <ul>
            <router-link 
                tag="li" 
                v-for="item in navs"
                :key="item.id"
                :to="item.path"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    id:0,
                    text:"电影",
                    icon:"&#xe717;",
                    path:"/movie"
                },
                {
                    id:1,
                    text:"影院",
                    icon:"&#xe61d;",
                    path:"/cinema"
                },
                {
                    id:2,
                    text:"我的",
                    icon:"&#xe605;",
                    path:"/mine"
                }
            ]
        }
    }
}
</script>

<style>
#footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top:1px solid #ccc;
}

#footer ul,#footer ul li{
    width: 100%;
    height: 100%;
}

#footer ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#footer ul .router-link-active{
    color:#c33;
}
#footer ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#footer ul li i{
    font-size:.4rem;
}

#footer ul li span{
    font-size:.3rem;
}
</style>