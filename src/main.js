import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.sass'
import "@popperjs/core";
import "bootstrap";
import router from './router/index.js';
import ElementPlus from  'element-plus';
import 'element-plus/dist/index.css'


createApp(App)
.use(ElementPlus)
    .use(router)
.mount('#app')
