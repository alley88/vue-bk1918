import http from "@utils/request";

export const movieNowApi = (cityId)=>http({
    method:"get",
    url:"/api/movieOnInfoList",
    data:{
        cityId:cityId
    }
})


export const movieCommingApi = (cityId)=>http({
    method:"get",
    url:"/api/movieComingList",
    data:{
        cityId:cityId
    }
})
