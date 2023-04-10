<template>
    <div class="bars-container" 
        :class="{'change': changeBars}" 
        @click="toggleMenu()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['openMenu'])
const changeBars = ref(false);

function toggleMenu() {
    changeBars.value = !changeBars.value;
    emit('openMenu');
}

defineExpose({
    toggleMenu
})
</script>

<style scoped>
.bars-container {
    display: inline-block;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    width: 44px;
    height: 5px;
    background-color: black;
    margin-bottom: 6px;
    transition: .4s;
    -moz-transition: .4s;
    -webkit-transition: .4s;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}

@media screen and (min-width: 768px) {
    .bars-container {
        display: none;
    }
}
</style>