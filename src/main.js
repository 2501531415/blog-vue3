import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './lib/element-plus'

import '@/assets/less/global.less'

const app = createApp(App)

//element-plus
element(app)

app.use(router).use(store).mount('#app')
