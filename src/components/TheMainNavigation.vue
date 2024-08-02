<template>
  <nav class="navigation">
    <RouterLink :to="{ name: 'form-page' }">Form</RouterLink>
    <RouterLink :to="{ name: 'blocks-page' }">Movies</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    gap: 40px;
    font-size: 40px;
  }

  .router-link-active {
    color: #027d84;
  }
</style>
