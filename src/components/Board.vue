<template>
    <div class="flex">
        <div class="grid grid-cols-8 w-auto">
            <div class="w-16 h-16 border" :class="getSquareColorClass(n)" v-for="n in 64"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getSquareColorClass(n) {
            n = n - 1
            var x = n % 2
            var y = Math.floor(n / 8) % 2

            if(x == 0 && y == 0) 
            {
                return "bg-white"
            }
            else if (x == 1 && y == 0)
            {
                return "bg-black"
            }
            else if(x == 0 && y == 1) 
            {
                return "bg-black"
            }
            else if (x == 1 && y == 1)
            {
                return "bg-white"
            }
        }
    }
}
</script>