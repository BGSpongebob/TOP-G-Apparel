import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = [];

  function addItemToCart(item) {
    items.push(item);
  }

  function removeItemFromCart(id) {
    items.splice(id, 1);
  }

  function getTotal() {
    let total = 0;

    items.forEach((item) => {
        total += item.price.toFixed(2) * item.quantity;
    })

    return total.toFixed(2);
  }

  return { items, addItemToCart, getTotal, removeItemFromCart }
});