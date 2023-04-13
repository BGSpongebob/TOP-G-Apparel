<template>
    <div class="items-list">
        <router-link 
            class="item" 
            v-for="(item, key) in items.value"
            :to="'/items/' + item.name + '/' + key"
        >
            <img :src="item.images[0]">
            <p class="item-name">{{ item.name }}</p>
            <div v-if="item.sale">
                <div class="item-sale">
                    <p class="item-price">{{ (item.price * ((100 - item.sale) / 100)).toFixed(2) }} лв.</p>
                    <p>{{ item.sale }}%</p>
                </div>
                <p class="item-price-sale">{{ item.price.toFixed(2) }} лв.</p>
            </div>
            <p v-else class="item-price">{{ item.price.toFixed(2) }} лв.</p>
        </router-link>
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 10px;
    padding: 10px;
    font-size: 14px;
}

.item {
    width: 45%;
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
    font-weight: bold;
}

.item-sale {
    color: red;
    float: left;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.item-price-sale {
    text-decoration: line-through;
}

@media screen and (min-width: 768px) {
    .item {
        width: 30%;
    }
    .items-list {
        float: left;
        width: calc(100% - 200px);
    }
}

@media screen and (min-width: 920px) {
    .item {
        width: 20%;
    }
}
</style>