<template>
    <div class="page">
        <Header :title="nm" icon></Header>
        <div class="movie_bg" :style="{'background-image':'url('+(detail.img?detail.img.replace(/w\.h/,'71.100'):'')+')'}"></div>
        <div class="movie_detail">
            <div class="movie_img">
                <img :src="detail.img | toImg('148.208')" alt="">
            </div>
            <div class="movie_info">
                <div>{{detail.nm}}</div>
                <div>{{detail.enm}}</div>
                <div>{{detail.sc}}</div>
                <div>{{detail.cat}}</div>
                <div>{{detail.pubDesc}}</div>
                <div>{{detail.star}}</div>
            </div>
        </div>
        <div class="des">
            {{detail.dra}}
        </div>
    </div>
</template>

<script>
import{movieDetailApi} from "@api/movie"
export default {
    name:"Detail",
    props:["id","nm"],
    data(){
        return {
            detail:{}
        }
    },
    async created(){
        let data = await movieDetailApi(this.id);
        console.log(data);
        this.detail = data.data.detailMovie;
    }

}
</script>

<style>
    .movie_bg{
        width: 100%;
        height: 3.76rem;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(.2rem);
        overflow: hidden;
        position: absolute;
    }
    .movie_detail{
        position: relative;
        z-index: 10;
        padding:.38rem .6rem .38rem .3rem;
        display: flex;
        color: #fff;
        font-size: .28rem;
    }
    .movie_detail img,.movie_img{
        width:2.2rem;
        height: 3rem;
    }

    .movie_img{
        margin-right: .24rem;
    }
    .des{
        padding: .2rem;
        font-size: .24rem;
    }
</style>