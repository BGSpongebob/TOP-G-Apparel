<template>
    <div class="item-images">
        <img v-for="image in item.value.images" :src="image">
    </div>
    <div class="item-details">
        <p class="item-name">{{ item.value.name }}</p>
        <p class="item-brand">{{ item.value.brand }}</p>
        <p class="item-price">{{ item.value.price.toFixed(2) }} лв.</p>

        <div class="items-sizes">
            <p>Изберете размер:</p>
            <div class="item-sizes-list">
                <div 
                    v-for="size in item.value.sizes"
                    @click="selectSize(size)"
                    :class="{'selected-size': selectedSize === size}">
                    {{ size }}
                </div>
            </div>
        </div>

        <div class="items-quantity">
            <p>Изберете количество:</p>
            <input type="number" v-model="quantity">
        </div>

        <div 
            class="add-to-cart" 
            @click="addToCart()"
        >
            <div>Добавете в количката</div>
        </div>

        <div 
            class="success-message"
            v-if="showSuccessMessage"
        >
            Успешно добавяне на продукт в количката!
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue';
import { useClothesStore } from '../stores/clothes';
import { useCartStore } from '../stores/cart';

const route = useRoute();
const store = useClothesStore();
const cart = useCartStore();
const item = ref(null);
const selectedSize = ref(null);
const quantity = ref(1);
const showSuccessMessage = ref(false);

onBeforeMount(() => {
    item.value = ref(store.getItemById(route.params.id));
})

function addToCart() {
    let newCartItem = {
        "id": route.params.id,
        "name": this.item.value.name,
        "gender": this.item.value.gender,
        "age": this.item.value.age,
        "category": this.item.value.category,
        "brand": this.item.value.brand,
        "size": selectedSize,
        "image": this.item.value.images[0],
        "price": this.item.value.price,
        "quantity": quantity.value
    };
    
    cart.addItemToCart(newCartItem);
    quantity.value = 1;
    selectedSize.value = null;

    showSuccessMessage.value = true;
    setTimeout(() => {
        showSuccessMessage.value = false;
    }, 5000);
}

function selectSize(size) {
    selectedSize.value = size;
}
</script>

<style scoped>
.item-images {
    float: left;
    width: 100%;
    height: 500px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    overflow: auto;
}

.item-images img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.item-details {
    float: left;
    width: 100%;
    padding: 10px;
}

.item-name, 
.item-price {
    float: left;
    width: 100%;
    font-size: 28px;
    font-weight: bold;
}

.item-price{
    font-size: 26px;
}

.item-brand {
    float: left;
    width: 100%;
    font-size: 24px;
}

.items-sizes,
.items-quantity {
    width: 100%;
    float: left;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.items-sizes p,
.items-quantity p {
    width: 100%;
    float: left;
    font-size: 18px;
}

.item-sizes-list {
    width: 100%;
    float: left;
    display: flex;
    gap: 10px;
}

.item-sizes-list div {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    min-width: 30px;
    border-radius: 3px;
    cursor: pointer;
}

.items-quantity input {
    width: 100px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 18px;
}

.add-to-cart {
    width: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.add-to-cart div {
    color: white;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

div.selected-size {
    border: 2px solid black;
    font-weight: bold;
}

.success-message {
    width: 100%;
    display: flex;
    justify-content: center;
    float: left;
    padding: 20px;
    font-size: 18px;
}

@media screen and (min-width: 920px) {
    .item-images {
        float: left;
        width: 50%;
        height: auto;
        flex-wrap: wrap;
    }
    .item-details {
        width: 50%;
    }
    .item-images img:first-child {
        width: 100%;
    }
    .item-images img {
        width: 45%;
    }
}
</style>