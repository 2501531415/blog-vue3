import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './lib/element-plus'
import highlight from './lib/highlight'
import '@/assets/less/global.less'
import 'highlight.js/styles/atom-one-light.css' //highlight样式文件

const app = createApp(App)

//element-plus
element(app)

//highlight
highlight(app)

app.use(router).use(store).mount('#app')
