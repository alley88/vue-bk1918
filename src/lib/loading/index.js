import LoadingView from "./index.vue";
import Vue from "vue";
class JSloading{
    constructor(){
        let LoadingFn = Vue.extend(LoadingView);
        this.loadingVm = new LoadingFn({
            el:document.createElement("div"),
        })  

        
    }
    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el);
    }
    loadingDestroy(){
        document.body.removeChild(this.loadingVm.$mount().$el);
    }
}

export default new JSloading();
/*
    Vue.extend:继承Vue这个构造函数 得到一个Vue的子类

*/