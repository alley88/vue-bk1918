export default {
    path:"/city/:path",
    component:_=>import("@pages/city"),
    name:"city",
    meta:{
        flag:false,
        requiredAuth:false
    }
}