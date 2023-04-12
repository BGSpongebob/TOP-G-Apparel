<template>
    <router-link class="cart-wrapper" to="/cart">
        <img src="/images/cart.png" alt="">
        <div class="items-in-cart" v-if="items.length > 0">
            {{ items.length }}
        </div>
    </router-link>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
</script>

<style scoped>

.cart-wrapper {
    position: relative;
}

img {
    width: 36px;
}

.items-in-cart {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    background-color: black;
    padding: 2px 6px 3px;
    border-radius: 10px;
    font-size: 10px;
}

@media screen and (min-width: 768px) {
    img {
        width: 40px;
    }
}
</style>