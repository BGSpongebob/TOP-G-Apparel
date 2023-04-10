<template>
    <input :class="{'show-input': showInput}" type="text" placeholder="Търсене в уебсайта">
    <img v-if="!showInput" @click="showInput = !showInput" src="/images/magnifying-glass.png">
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const showInput = ref(false);
const windowWidth = ref(window.innerWidth);

onBeforeMount(() => {
    if(window.innerWidth <= 768)
        showInput.value = false;

    window.addEventListener('resize', onResize);
})

function onResize() {
    windowWidth.value = window.innerWidth;
    if(windowWidth.value <= 768)
        showInput.value = false;
    else 
        showInput.value = true;
}
</script>

<style scoped>
input {
    display: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    height: 30px;
}

input.show-input {
    display: block;
}

img {
    width: 30px;
    cursor: pointer;
}

@media screen and (min-width: 768px) {
    input {
        display: block;
    }
    img {
        display: none;
    }
}
</style>