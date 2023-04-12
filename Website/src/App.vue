<template>
  <div class="container">
    <TheHeader />
    
    <main>
      <router-view v-slot="{ Component }">
        <Transition>
            <component :is="Component" />
        </Transition>
      </router-view>
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

.v-enter-active,
.v-leave-active {
  transition: opacity .3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
