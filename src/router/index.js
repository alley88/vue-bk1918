import Vue from "vue";
import VueRouter from "vue-router";
import movie from "./movie"
import cinema from "./cinema"
import search from "./search"
import city from "./city"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/movie"
        },
        movie,
        cinema,
        search,
        city,
        {
            path:"/mine",
            name:"mine",
            meta:{
                flag:true,
                requiredAuth:true
            },
            component:_=>import("@pages/mine")
        },
        {
            path:"/detail/:id/:nm",
            component:_=>import("@pages/detail"),
            name:"detail",
            props:true
        },
        {
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false
            }
        }
    ]
})



router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }

    }else{
        next();
    }
})

export default router;