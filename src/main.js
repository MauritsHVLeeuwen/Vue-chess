import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'
import './assets/main.css'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
  
const app = createApp(App)
  
app.use(store)
app.use(createPinia())
app.use(router)

app.mount('#app')
