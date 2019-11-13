# 下拉刷新的时候
>
 - 1、需要配置better-scroll
 ```javascript
   this.scroll =  new BScroll(".wrapper",{
        pullDownRefresh:{
            threshold:50//距离顶部的距离
        }
    })

 ```

 - 2、使用下拉刷新这个事件 `pullingDown`
```javascript
    this.scroll.on("pullingDown",()=>{
        //下拉刷新的逻辑
    })
```

 - 3、better-scroll默认帮我们做了性能优化，当数据加载完毕后才允许进行下一次请求
    - this.scroll.finishPullDown()  通知better-scroll可以进行下一次数据请求
    - this.scroll.refresh()    重新计算better-scroll


# 上拉加载更多

    1、配置better-scroll
```javascript
        this.scroll = new BScroll(".wrapper",{
            pullUpLoad:true // 或者一个对象
        })
```
    2、使用上拉加载更多的事件 `pullingUp`
```javascript
    this.scroll.on("pullingUp",()=>{
        //上拉加载更多的逻辑
    })
```
    3、better-scroll默认帮我们做了性能优化，当数据加载完毕后才允许进行下一次请求
    - this.scroll.finishPullUp();  通知better-scroll可以进行下一次数据请求
    - this.scroll.refresh()        重新计算better-scroll


 # 监听滚动事件
   - 1、需要配置better-scroll

```javascript 
    this.scroll =  new BScroll(".wrapper",{
       probeType:1,2,3 //优先选择1
   }) 
```

 - 2、使用监听滚动的事件

 ```javascript
    this.scroll.on("scroll",({x,y})=>{
        //滚动事件的业务逻辑
    })
 ```