<template>
  <header>
    <TheLogo />
    
    <nav>
      <router-link to="/items">ПРОДУКТИ</router-link>
      <router-link to="/items/men">МЪЖЕ</router-link>
      <router-link to="/items/women">ЖЕНИ</router-link>
      <router-link to="/items/kids">ДЕЦА</router-link>
    </nav>

    <div class="search-and-cart">
      <TheSearchBar />
      <CartIcon />
    </div>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue';
import TheSearchBar from './TheSearchBar.vue';
import CartIcon from '../icons/CartIcon.vue';
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
}

nav {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.search-and-cart {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>