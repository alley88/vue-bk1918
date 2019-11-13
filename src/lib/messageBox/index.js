import MessageBox from "./index.vue";
import Vue from "vue";


export default (function(){
    var defaultVal = {
        title:"信息",
        content:"内容"
    }
    let MessageBoxFn = Vue.extend(MessageBox);

    return (options)=>{
        for(var key in options){
            defaultVal[key] = options[key];
        }

        let messageBoxVm = new MessageBoxFn({
            el:document.createElement("div"),
            data:{
               title:defaultVal.title,
               content:defaultVal.content 
            },
            methods:{
                handleClose(){
                    document.body.removeChild(messageBoxVm.$mount().$el); 
                },
                handleOk(){
                    defaultVal.ok && defaultVal.ok()
                    document.body.removeChild(messageBoxVm.$mount().$el); 
                }
            }
        })

        document.body.appendChild(messageBoxVm.$mount().$el);
    }

})()


