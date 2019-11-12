import http from "@utils/request";
/*
* @params:cityID 城市ID
* 接口:正在热映
*/
export const movieNowApi = (cityId)=>http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})

/*
* @params:cityID 城市ID
* 接口:即将上映
*/
export const movieCommingApi = (cityId)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:cityId
    }
})

/*
* @params:movieId 电影的ID
* 接口:电影详情
*/

export const movieDetailApi = (movieId)=>http({
    method:"get",
    url:"/api/detailmovie?",
    data:{
        movieId
    }
})
/*
* @params
    cityId 城市ID
    kw  模糊查询的数据
* 接口:电影搜索
*/

export const movieSearch = (cityId,kw)=>http({
    method:"get",
    url:"api/searchList",
    data:{
        cityId,
        kw
    }
})