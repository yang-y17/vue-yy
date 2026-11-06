// 从 Vue 库中取出 createApp：它负责创建整个 Vue 应用。
import { createApp } from 'vue'

// 引入全站样式，页面中的颜色和布局都来自这个文件。
import './style.css'

// 引入根组件 App.vue；所有页面内容最终都从 App 开始显示。
import App from './App.vue'

// 使用 App 组件创建一个 Vue 应用实例。
const app = createApp(App)

// 把 Vue 应用挂载到 index.html 中 id 为 app 的元素上。
app.mount('#app')






