<script>
export default {
  props: {
    name: String,
  },
  methods: {
    drag(event) {
      event.dataTransfer.setData("text", event.target.id);
      this.$store.commit('setPiece', this.name)
      console.log(this.$store.state.piece)
    }
  }
}
</script>

<template>
    <img :id="name" :src="`/src/assets/img/${name}.png`" draggable="true" :ondragstart="drag">
</template>