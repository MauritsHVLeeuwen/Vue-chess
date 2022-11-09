<template>
  <div class="flex mt-10 ml-10">
    <button @click="onClick"> click me </button>
    <div class="grid grid-cols-8 w-auto">
      <div class="w-16 h-16 border" v-for="x in 8">
        <Square v-for="y in 8" :x="x" :y="y" />
      </div>
    </div>
  </div>
</template>


<script>
import Square from "../components/Square.vue";

export default {
  components: { Square },
  methods:{
    onClick() {
      this.$store.commit('incrementCount')
    }
  }
}
</script>