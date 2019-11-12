/*
    函数节流

*/
export const throttle = function (callback,time){
    var firstTime = 0;
    return function(){
        var lastTime = new Date().getTime();
        if(lastTime - firstTime > time){
            callback()
            firstTime = lastTime;
        }
    }
}

