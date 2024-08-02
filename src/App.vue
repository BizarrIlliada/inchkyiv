<template>
  <TheAlerts></TheAlerts>
  <header class="app-header">
    <TheHeaderSlider></TheHeaderSlider>
    <TheMainNavigation></TheMainNavigation>
  </header>

  <main class="app-main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import TheAlerts from './components/TheAlerts.vue';
import TheHeaderSlider from './components/TheHeaderSlider.vue';
import TheMainNavigation from './components/TheMainNavigation.vue';
</script>


<style scoped lang="scss">
  .app-header {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .app-main {
    display: flex;
    flex-grow: 1;
  }
</style>
