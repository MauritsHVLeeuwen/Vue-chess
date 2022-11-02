<template>
    <div class="w-16 h-16 border" :class="getSquareColorClass">
        <black-king v-if="black_king" />
        <black-queen v-if="black_queen" />
    </div>
</template>

<script>
import BlackKing from './BlackKing.vue';
import BlackQueen from './BlackQueen.vue';

export default {
  components: { BlackKing, BlackQueen },  
    props: ['x', 'y'],  
    data: function() {
        return {
            black_king: false,
            black_queen: false,
        }
    },
    computed: {
        getSquareColorClass() {
            if(((this.y - this.x) % 2) == 0) 
            {
                return "bg-white"
            }
            return "bg-gray-500"
        }
    },
    mounted: function() {
        if(this.x == 5 && this.y == 1)
        {
            this.black_king = true;
        }
        if(this.x == 4 && this.y == 1)
        {
            this.black_queen = true;
        }
    }
}
</script>