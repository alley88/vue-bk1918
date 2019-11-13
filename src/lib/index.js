import Header from "./header"
import bscroll from "./bscroll"
import Loading from "./loading"
import MessageBox from "./messageBox"



const UIcomponents = [
    Header,
    bscroll
]


 const install = (Vue)=>{
    //全局注册
    UIcomponents.forEach(item=>{
        Vue.component(item.name,item);
    })
}


export default {
    install,
    Loading,
    MessageBox
}


/*
Vue.use:
    使用插件

    Vue.use是用来使用插件的，这个插件必须提供一个install方法。并且会给这个install方法传入一个参数Vue

    当这个插件是一个对象的时候  这个对象必须提供一个install方法，如果这个插件是一个函数的情况下，那么
    这个函数就会被当做install方法


*/