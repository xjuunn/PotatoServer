<template>
    <el-button @click=test>test</el-button>
    <canvas id="skin_container"></canvas>
  <el-slider v-model="zoom" @input="changezoom"/>
  <el-slider v-model="rotatex" @input="changex"/>
  <el-slider v-model="rotatey" @input="changey"/>
  <el-slider v-model="rotatez" @input="changez"/>
</template>
<script setup>
import * as skinview3d from 'skinview3d';
import { onMounted ,ref} from 'vue';
import anime from 'animejs';
let skinViewer;
let camera;
onMounted(() => {
    skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 400,
        skin: "/s1.png"
    });
    camera = skinViewer.camera;
  skinViewer.fov = 50;
  skinViewer.zoom = 1;
  skinViewer.animation = new skinview3d.WalkingAnimation();
})
function changezoom(i){
  skinViewer.zoom = i/50;
  console.log(i/50)
}
function changex(i){
  rotatex = i;
  rotateupdate();
}
function changey(i){
  rotatey = i;
  rotateupdate();
}
function changez(i){
  rotatez = i;
  rotateupdate();
}
function rotateupdate(){
  camera.position.set(0,1,rotatez.value);
}
let zoom = ref(50);
let rotatex = ref(1);
let rotatey = ref(1);
let rotatez = ref(1);


function test(){
  // skinViewer.animation = new skinview3d.FlyingAnimation();
  // camera.position.set(10,100,0)
  rotatez.value++;
  rotateupdate();
}
let b = {
  a:0
};
anime({
  targets:b,
  a:50,
  delay:20,
  easing: 'linear',
  update:function (){
    // skinViewer.zoom = b.a
    camera.position.set(4,5,b.a);

  }
})
</script>
<style scoped>
.test {
    background-color: red;
    display: inline-block;
}
</style>
