<template>
    <div class="items-list">
        <a 
            class="item" 
            v-for="item in items.value"
            :href="'/item/' + item.name + '/' + item.id">
            <img :src="item.images[0]">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-price">{{ item.price }}</p>
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useClothesStore } from '../../stores/clothes';

const store = useClothesStore();
const items = ref({});

onMounted(() => {
    items.value = ref(store.clothes);
})
</script>

<style scoped>
.items-list {
    float: left;
    width: calc(100% - 200px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 10px;
    padding: 10px;
}

.item {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.item img {
    max-width: 100%;
    max-height: 180px;
  object-fit: contain;
}

.item-name {
    border-top: 1px solid #ccc;
    padding-top: 5px;
    margin-top: 5px;
}
</style>