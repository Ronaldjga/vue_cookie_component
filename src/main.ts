import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueCookies from 'vue3-cookies'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(VueCookies)

app.mount("#app")