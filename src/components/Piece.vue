<script>
export default {
    props: {
        name: String,
    }
}
</script>

<template>
    <img :src="`/src/assets/img/${name}.png`">
</template>