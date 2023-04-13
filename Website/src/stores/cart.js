import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  function addItemToCart(item) {
    items.value.push(item);
  }

  function removeItemFromCart(id) {
    items.value.splice(id, 1);
  }

  function getTotal() {
    let total = 0;

    items.value.forEach((item) => {
        if(item.sale)
          total += (item.price * ((100 - item.sale) / 100)).toFixed(2) * item.quantity;
        else
          total += item.price.toFixed(2) * item.quantity;
    })

    return total.toFixed(2);
  }

  return { items, addItemToCart, getTotal, removeItemFromCart }
});