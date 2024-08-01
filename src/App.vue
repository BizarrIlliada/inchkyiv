<template>
  <!-- <header class="app-header">
    <HeaderSlider></HeaderSlider>
  </header> -->
  <main class="app-main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderSlider from './components/HeaderSlider.vue';
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
