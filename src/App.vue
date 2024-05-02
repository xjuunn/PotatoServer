<template>
  <IndexBg icon="/favicon.ico" txtsvg="/favicontxt.svg"></IndexBg>

  <skin-view :config="config" @onGetViewer="test"></skin-view>
</template>
<script setup>
import IndexBg from "./components/IndexBg.vue";
import SkinView from "./components/skinView.vue";
let config = {
  width:400,
  height:500,
  skin:"/skins/_xjuunn.png"
}
function test(e){
  console.log(e)
  e.zoom = 0.33;
  e.nameTag = "_xjuunn"
  // e.camera = false;

}


</script>
<style scoped>

</style>
<style>
@font-face {
  font-family: "Pixel";
  src: url("/fonts/Pixel.ttf");
}
</style>