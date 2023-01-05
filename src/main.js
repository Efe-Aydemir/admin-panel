import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueFeather from 'vue-feather';
import { createRouter, createWebHashHistory } from 'vue-router';
const about = require('@/components/AdmPanel.vue')
const home = {template : '<div>Home</div>'}


const routes = [
    {
        path : '/',
        component : home
    },
    {
        path : '/about',
        component : about
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
})



createApp(App).component(VueFeather.name, VueFeather).use(router).mount('#app')
