<template>
    <div class="w-16 h-16 border" :class="getSquareColorClass">
        <Piece v-if="this.piece !== ''" :name="piece" />
        {{ this.piece }}
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
    }
}
</script>