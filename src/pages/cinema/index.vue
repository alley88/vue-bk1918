<template>
  <div class="page">
    <Header title="影院"></Header>
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
        </ul>
      </div>
    </div>
    <CinemaList/>
  </div>
</template>

<script>
import CinemaList from "@components/cinemaList";
export default {
  name: "Cinema",
  components: {
    CinemaList
  }
};
</script>

<style>
/*cinema*/
#cinema_content {
  position: absolute;
  width: 100%;
  height: 100%;
}
#cinema_content .cinema_nav {
  width: 100%;
  position: fixed;
  height: 0.92rem;
  border-bottom: 1px solid #ccc;
  z-index: 2;
  background: #fff;
}
#cinema_content .cinema_nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#cinema_content .cinema_nav ul li {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
}
</style>