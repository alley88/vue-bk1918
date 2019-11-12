import http from "@utils/request";
/*
* 
* 接口:城市列表
*/
export const cityApi = _=>http({
    method:"get",
    url:"/api/cityList"
})