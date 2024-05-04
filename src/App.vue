<template>
  <IndexBg class="bg" icon="/favicon.ico" txtsvg="/favicontxt.svg"></IndexBg>
  <div class="body text-center ">
    <span class="serverName" v-for="(item,index) in config.serverInfo.name" :key="index">{{item}}</span>
    <div class="serverDomain">
      <span v-for="(item,index) in config.serverInfo.domain" :key="index">{{item}}</span>
    </div>
  </div>
  <!--  <skin-view class="border skinView" :config="config" @onGetViewer="test"></skin-view>-->
</template>
<script setup>
import IndexBg from "./components/IndexBg.vue";
import SkinView from "./components/skinView.vue";
import config from './config.js';
import * as skinView3d from 'skinview3d';
import anime from "animejs";
import {onMounted} from "vue";
let viewer ;
let Skinconfig = {
  width:400,
  height:500,
  skin:"/skins/_xjuunn.png"
}
onMounted(()=>{
  // var skinViewAnime = anime.timeline({
  //   easing:'easeInOutQuad',
  //   update:function () {  }
  // })
  // skinViewAnime.add({
  //   targets:''
  // });
  let indexAnime = anime.timeline({});
  indexAnime.add({
    targets: '.serverName',
    top: '20vh',
    opacity:1,
    delay: anime.stagger(20, {from: 'center'})
  })
  indexAnime.add({
    targets:'.serverDomain span',
    right:'0vw',
    easing:'easeInOutSine',
    opacity:1,
    delay: function (e) {
      return anime.random(-300,300);
    }
  },'-=800')

})

function test(skinViewer){
  skinViewer.animation = new skinView3d.FlyingAnimation();
  skinViewer.camera.position.set(...[-80,-20,20]);
  viewer = skinViewer;
}

</script>
<style scoped>
.bg{
  position: fixed;
  top: 0;
}
.body{
  width: 100vw;
  height: 100vh;
}
.serverName{
  font-family: Pixel,sans-serif;
  font-weight: 900;
  font-size: 15vw;
  position: relative;
  top: -25vh;
  opacity: 0;
}
.serverDomain{
  font-family: Pixel,sans-serif;
  //font-size: 2vw;
  position: relative;
  top: 20vh;
  margin: 0 auto;
  width: 70vw;
  text-align: right;
}
.serverDomain span{
  position: relative;
  right: -100vw;
  opacity: 0;
}

/* 媒体查询：针对小型设备（手机）设置不同的字体大小 */
@media (max-width: 576px) {
  .serverDomain {
    font-size: 20px; /* 在小型设备上设置较小的字体大小 */
  }
}
/* 媒体查询：针对中型设备（平板）设置不同的字体大小 */
@media (min-width: 576px) {
  .serverDomain {
    font-size: 30px; /* 在平板设备上设置较大的字体大小 */
  }
}


/* 媒体查询：针对大型设备（桌面）设置不同的字体大小 */
@media (min-width: 992px) {
  .serverDomain {
    font-size: 40px; /* 在桌面设备上设置更大的字体大小 */
  }
}

</style>
<style>
@font-face {
  font-family: "Pixel";
  src: url("/fonts/Pixel.ttf");
}
</style>