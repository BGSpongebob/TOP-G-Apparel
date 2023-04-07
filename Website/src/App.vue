<template>
  <div class="container">
    <TheHeader />
    
    <main>
        <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 100%;
  max-width: 1200px;
}
</style>
