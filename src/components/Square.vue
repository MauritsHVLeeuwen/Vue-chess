<template>
  <div class="w-16 h-16 border" :class="getSquareColorClass" :ondrop="drop" :ondragover="allowDrop">
    <Piece v-if="this.piece !== ''" :name="piece" />
  </div>
</template>

<script>
import Piece from './Piece.vue';

export default {
    components: { Piece },
    props: ['x', 'y'],
    data: function () {
        return {
            piece: '',
        }
    },
    computed: {
        getSquareColorClass() {
            if (((this.y - this.x) % 2) == 0) {
                return "bg-white"
            }
            return "bg-gray-500"
        }
    },
    mounted: function () {
        if (this.x == 5 && this.y == 1) {
            this.piece = 'black_king';
        }
        if (this.x == 4 && this.y == 1) {
            this.piece = 'black_queen';
        }

        this.unwatch = this.$store.watch((state, getters) => getters.piece, (newValue, oldValue) => {
            console.log(`Updating from ${oldValue} to ${newValue}`);
        })   
    },
    methods: {
        allowDrop(event) {
            event.preventDefault();
        },
        drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("text");
            event.target.appendChild(document.getElementById(data));
            this.$store.commit('setPiece', "")
        }
    }
}

</script>