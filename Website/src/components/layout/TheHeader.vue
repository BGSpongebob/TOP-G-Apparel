<template>
  <header>
    <TheLogo />
    
    <nav :class="{'nav-mobile': mobileMenu}" @click="closeMenu()">
      <router-link to="/items">ПРОДУКТИ</router-link>
      <router-link to="/items/men">МЪЖЕ</router-link>
      <router-link to="/items/women">ЖЕНИ</router-link>
      <router-link to="/items/kids">ДЕЦА</router-link>
      <router-link to="/items/sales">ПРОМОЦИИ</router-link>
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
  width: calc(100% - 20px);
  font-size: 19px;
  border-bottom: 1px solid #ccc;
  margin: 0 10px 20px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

.nav-mobile {
  position: absolute;
  top: 84px;
  left: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
  height: auto;
  max-height: 100%;
  opacity: 1;
  transition: max-height .5s;
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
    justify-content: space-around;
    flex-basis: 100%;
    max-height: none;
    opacity: 1;
  }
}
</style>