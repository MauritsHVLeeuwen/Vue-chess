<script>
export default {
    props: {
        name: String,
    },
    methods: {
        drag(event) {
            event.dataTransfer.setData("text", event.target.id);
        }
    }
}
</script>

<template>
    <img :id="name" :src="`/src/assets/img/${name}.png`" draggable="true" :ondragstart="drag">
</template>