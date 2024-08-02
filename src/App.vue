<template>
  <TheAlerts></TheAlerts>
  <!-- <header class="app-header">
    <TheHeaderSlider></TheHeaderSlider>
  </header> -->

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
</script>


<style scoped lang="scss">
  .app-header {
    height: 100vh;
    margin-bottom: 40px;
  }

  .app-main {
    display: flex;
    flex-grow: 1;
  }
</style>
