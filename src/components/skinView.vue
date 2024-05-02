<template>
    <canvas id="skin_container"></canvas>
</template>
<script setup>
import * as skinview3d from 'skinview3d';
let emit = defineEmits(['onGetViewer'])
let props = defineProps(['config'])
import {onMounted} from "vue";
onMounted(()=>{
  let skinViewer = new skinview3d.SkinViewer({
    canvas:document.getElementById("skin_container"),
    width: props?.config?.width??300,
    height: props?.config?.height??400,
    skin: props?.config?.skin??"/skins/_xjuunn.png"
  })
  emit('onGetViewer',skinViewer)
})
</script>
<style scoped>

</style>