import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueFeather from 'vue-feather';

createApp(App).component(VueFeather.name, VueFeather).mount('#app')
