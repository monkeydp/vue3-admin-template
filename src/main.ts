import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css'
import '@/styles/index.scss'

import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i])
}

app.mount('#app')
