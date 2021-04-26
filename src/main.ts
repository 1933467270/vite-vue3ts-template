/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2021-04-26 10:06:07
 * @LastEditors: Wsl
 * @LastEditTime: 2021-04-26 15:45:23
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
// import ElementPlus from "element-plus"
// import 'element-plus/lib/theme-chalk/index.scss';

import './core/lazy-lib/index'

createApp(App).use(store).use(router).mount('#app')
