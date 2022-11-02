<template>
    <div class="flex">
        <div class="grid grid-cols-8 w-auto">
            <div class="w-16 h-16 border" v-for="x in 8">
                <div class="w-16 h-16 border" :class="getSquareColorClass(x, y)" v-for="y in 8"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getSquareColorClass(x, y) {
            if(((x - y) % 2) == 0) 
            {
                return "bg-white"
            }
            return "bg-black"
        }
    }
}
</script>