<template>
    <div class="sales-wrapper">
        <p class="sales-title">ПРОМОЦИИ</p>
        <div class="items-list">
            <div class="item-link" v-for="(item, key) in items.value" v-show="item.sale">
                <router-link 
                    class="item"
                    :to="'/items/' + item.name + '/' + key" v-if="item.sale"
                >
                    <img :src="item.images[0]">
                    <p class="item-name">{{ item.name }}</p>
                    <div class="item-sale">
                        <p class="item-price">{{ (item.price * ((100 - item.sale) / 100)).toFixed(2) }} лв.</p>
                        <p>{{ item.sale }}%</p>
                    </div>
                    <p class="item-price-sale">{{ item.price.toFixed(2) }} лв.</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useClothesStore } from '../stores/clothes';

const store = useClothesStore();
const items = ref({});

onMounted(() => {
    items.value = ref(store.clothes);
})
</script>

<style scoped>
.sales-wrapper {
    float: left;
    width: 100%;
    margin: 30px 0;
    padding: 10px;
}

.sales-title {
    float: left;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: bold;
}

.sales-list {
    width: 100%;
    float: left;
    display: flex;
    justify-content: center;
    gap: 10px;
    overflow: auto;
}

.items-list {
    float: left;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px 10px;
    padding: 10px;
    font-size: 14px;
    overflow: auto;
}

.item-link {
    width: 45%;
}

.item {
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
    .item-link {
        width: 30%;
    }
}

@media screen and (min-width: 920px) {
    .item-link {
        width: 20%;
    }
}

img {
    float: left;
}
</style>