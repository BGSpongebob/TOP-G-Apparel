<template>
    <div class="searchbar-wrapper">
        <input 
            :class="{'show-input': showInput}" 
            type="text" 
            placeholder="Търсене"
        >
        <img 
            v-if="!showInput" 
            @click="showInput = !showInput" 
            src="/images/magnifying-glass.png"
        >
        <div 
            v-if="showInput && windowWidth <= 768" 
            @click="showInput = false"
            class="close-searchbar">x</div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const showInput = ref(false);
const showInputClose = ref(false);
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
.searchbar-wrapper {
    position: relative;
}

input {
    display: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    height: 30px;
    max-width: 140px;
}

input.show-input {
    display: block;
}

img {
    width: 30px;
    cursor: pointer;
}

.close-searchbar {
    position: absolute;
    right: 10px;
    top: 0px;
    font-size: 21px;
    font-weight: bold;
    cursor: pointer;
}

@media screen and (min-width: 768px) {
    input {
        display: block;
        max-width: none;
    }
    img {
        display: none;
    }
}
</style>