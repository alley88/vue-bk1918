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
