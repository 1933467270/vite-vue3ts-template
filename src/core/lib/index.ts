/*
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2021-04-26 11:18:52
 * @LastEditors: Wsl
 * @LastEditTime: 2021-04-26 12:03:19
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
