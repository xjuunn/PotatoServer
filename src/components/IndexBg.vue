<template>
  <div class="bg">
    <div class="bgCard">
      <div v-for="item in 75" class="line">
        <div class="imgline" ref="imgline"></div>
        <div class="nameline"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import anime from "animejs";
import {onMounted, ref} from "vue";
let props = defineProps(['icon','txtsvg']);
let iconUrl = `url("${props.icon??'favicon.ico'}")`;
let txtsvgUrl = `url("${props.txtsvg??'favicontxt.svg'}")`;
onMounted(()=>{
  anime({
    targets: '.line',
    translateX: function (el) {
      return anime.random(-1000,1000);
    },
    duration: 50000
  });
  anime({
    targets: '.nameline',
    translateX: function (el) {
      return anime.random(-1000,1000);
    },
    duration: 50000
  });


})
</script>
<style scoped>
.bg{
  position: fixed;
  width: 100vw;
  height: 100vh;
  user-select: none;
  overflow: hidden;
  flex-wrap: nowrap;
  z-index: -1;
  float: left;
}
.bgCard{
  transform: rotate(-30deg) translateX(-500vw);
  transform-origin: left top;
  height: 500vh;
  width: 3000vw;
  opacity: 3%;
  overflow: hidden;

}
.line{
  margin-top: 10px;
}
.imgline{
  width:1000vw;
  height: 70px;
  background-image: v-bind(iconUrl);
  background-size: 70px;
  background-repeat: repeat-x;
  background-attachment: fixed;


}
.nameline{
  width: 1000vw;
  height: 30px;
  background-image: v-bind(txtsvgUrl);
  background-size: 100px;
  background-repeat: repeat-x;
  background-attachment: fixed;
  font-family: Pixel,sans-serif;
}


</style>
