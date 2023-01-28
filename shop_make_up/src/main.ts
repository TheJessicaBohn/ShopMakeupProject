import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue)
  .use(IconsPlugin)
  .mount('#app')
