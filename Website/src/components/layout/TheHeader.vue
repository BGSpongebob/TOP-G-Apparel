<template>
  <header>
    <TheLogo />
    
    <nav :class="{'nav-mobile': mobileMenu}" @click="closeMenu()">
      <router-link to="/items">ПРОДУКТИ</router-link>
      <router-link to="/items/men">МЪЖЕ</router-link>
      <router-link to="/items/women">ЖЕНИ</router-link>
      <router-link to="/items/kids">ДЕЦА</router-link>
    </nav>

    <div class="search-and-cart">
      <TheSearchBar />
      <CartIcon />
      <BurgerMenu @open-menu="openMenu" ref="burgerMenu"/>
    </div>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue';
import TheSearchBar from './TheSearchBar.vue';
import CartIcon from '../icons/CartIcon.vue';
import BurgerMenu from '../icons/BurgerMenu.vue';
import { ref } from 'vue';

const mobileMenu = ref(false);
const burgerMenu = ref(null);

function openMenu() {
  mobileMenu.value = !mobileMenu.value;
}

function closeMenu() {
  if(window.innerWidth <= 768) {
    burgerMenu.value.toggleMenu();
  }
}
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
  display: none;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.nav-mobile {
  display: flex;
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
}

.search-and-cart {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  nav {
    display: flex;
    flex-direction: row;
  }
}
</style>