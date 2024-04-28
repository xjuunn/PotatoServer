<template>
    <el-button @click="test">test</el-button>
    <div class="test">test</div>
</template>
<script setup>
import anime from 'animejs';
function test(){
console.log(anime);
anime({
  targets: '.test',
  translateX: 250
});
}

</script>
<style scoped>
    .test{
        background-color: red;
        display: inline-block;
    }
</style>