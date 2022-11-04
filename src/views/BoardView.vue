<script setup>
import Board from '../components/Board.vue'
import { createApp } from 'vue'
import { createStore } from 'vuex'

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

const app = createApp({})

app.use(store)
</script>

<template>
  <div>
    count is: {{store.state.count}}
    <Board />
  </div>
</template>
