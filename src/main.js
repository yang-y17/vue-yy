// Vue 启动入口：加载全局样式，再把 App 显示到 index.html 的 #app 中。
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')






