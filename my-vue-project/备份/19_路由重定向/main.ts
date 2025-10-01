// 引入createApp用于创建应用
import { createApp } from 'vue'
// 引入根组件App
import App from './App.vue'
import router from './router'

let app = createApp(App)
app.use(router)
app.mount('#app')