<template>
  <div>
    count is: {{count}}
    <Board />
  </div>
</template>

<script>
import Board from '../components/Board.vue'

export default{
  components: { Board },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
