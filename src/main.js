import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from './plugins/vuetify' // vuetifyのインポート

import '@mdi/font/css/materialdesignicons.css' // mdiアイコンのCSS読み込み

const app = createApp(App)

app.use(createPinia())
app.use(vuetify) // アプリへの定義追加

app.mount('#app')
