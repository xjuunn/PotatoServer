<template>
  <IndexBg class="bg" icon="/favicon.ico" txtsvg="/favicontxt.svg"></IndexBg>
  <div class="body text-center ">
    <span class="serverName" v-for="(item,index) in config.serverInfo.name" :key="index">{{item}}</span>
    <div class="serverDomain">
      <span v-for="(item,index) in config.serverInfo.domain" :key="index">{{item}}</span>
    </div>
    <skin-view class="skinView" :config="skinConfig" @onGetViewer="initSkinView"></skin-view>
  </div>
</template>
<script setup>
import IndexBg from "./components/IndexBg.vue";
import SkinView from "./components/skinView.vue";
import config from './config.js';
import * as skinView3d from 'skinview3d';
import anime from "animejs";
import {onMounted, ref} from "vue";
let color1 = config.serverInfo.colorTheme1;
let color2 = config.serverInfo.colorTheme2;
let skinConfig = {
  width:900,
  height:900,
  skin:"/skins/_xjuunn.png"
}
onMounted(()=>{
  setSkinViewSize();
  setSkinViewSize();
  setAnimes();

})
// 设置页面动画
function setAnimes(){
  let indexAnime = anime.timeline({});
  indexAnime.add({
    targets:'.serverName',
  },2)
  indexAnime.add({
    targets: '.serverName',
    top: '20vh',
    opacity:1,
    delay: anime.stagger(20, {from: 'center'})
  },'-=20')
  indexAnime.add({
    targets:'.serverDomain span',
    right:'0vw',
    easing:'easeInOutSine',
    opacity:1,
    delay: function (e) {
      return anime.random(-300,300);
    }
  },'-=1000')
  indexAnime.add({
    targets: '.serverName',
    rotate: anime.stagger([-360, 360]),
    duration:20,
    delay:anime.stagger(20, {from: 'center'}),
  })
  // indexAnime.add({
  //   targets:'.skinView',
  //   top:0,
  //   left:0,
  //   easing:'linear'
  // })
}
// 初始化皮肤视图
let skinCamera;
let skinView;
function initSkinView(skinView1){
  skinView = skinView1;
  skinCamera = skinView.camera;
  skinView.animation = new skinView3d.FlyingAnimation();
  skinView.controls.enableRotate = true;
  skinView.scene.children[2].position.set(0,0,-20);

}
// SkinView 响应式
window.onresize = reSize;
function reSize(){
  setSkinViewSize();
}
function setSkinViewSize(){
  const {innerWidth,innerHeight} = window;
  skinView.renderer.setSize(innerWidth,innerHeight);
  let offset = -(innerWidth-1400)*0.05;
  console.log(offset)
  skinView.scene.children[2].position.y = offset;
  skinCamera.aspect = innerWidth / innerHeight;
  skinCamera.updateProjectionMatrix();
  skinCamera.scale.x = skinCamera.scale.y = skinCamera.z = 3000/innerWidth;
  skinCamera.fov =30;
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
  overflow-x: hidden;
}
.serverName{
  font-family: Pixel,sans-serif;
  font-weight: 900;
  font-size: 15vw;
  position: relative;
  top: -25vh;
  opacity: 0;
  text-shadow: 3px 3px 9px #000 ,
  3px 3px 3px #000,
  3px 3px 3px #000,
  6px 6px 10px #000,
  2px 2px 3px #000;
}
.serverDomain{
  font-family: Pixel,sans-serif;
  //font-size: 2vw;
  position: relative;
  top: 20vh;
  margin: 0 auto;
  width: 70vw;
  text-align: right;
  text-shadow: 1px 1px 4px #000 ,
  1px 1px 1px #000;
}
.serverDomain span{
  position: relative;
  right: -100vw;
  opacity: 0;
}
/* .serverName:nth-child(n+5){
  z-index: 6;
} */
.skinView{
  position: absolute;
  top:0;
  left: 0;
  z-index: 5;
  transform-origin: left top;
}


@media (max-width: 576px) {
  .serverDomain {
    font-size: 20px;
  }
}
@media (min-width: 576px) {
  .serverDomain {
    font-size: 30px;
  }
}
@media (min-width: 992px) {
  .serverDomain {
    font-size: 40px;
  }
}
</style>
<style>
@font-face {
  font-family: "Pixel";
  src: url("/fonts/Pixel.ttf");
}
</style>