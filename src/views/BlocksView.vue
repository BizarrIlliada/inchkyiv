<template>
  <div class="blocks-page">
    <h3 class="blocks-page__title">
      Movies Page
    </h3>

    <div class="blocks-page__sorting">
      <div class="blocks-page__radio">
        <input
          id="radio-sort-standard"
          type="radio"
          name="sort"
          value="standard"
          v-model="sortingValue"
        />
        <label class="blocks-page__radio-label" for="radio-sort-standard">
          В порядку отримання з сервера
        </label>
      </div>
      <div class="blocks-page__radio">
        <input
          id="radio-sort-alphabet"
          type="radio"
          name="sort"
          value="alphabetical"
          v-model="sortingValue"
        />
        <label class="blocks-page__radio-label" for="radio-sort-alphabet">
          В алфавітному порядку
        </label>
      </div>
    </div>

    <div class="blocks-page__sorting">
      <div class="blocks-page__radio">
        <input
          id="radio-display-left"
          type="radio"
          name="display"
          value="img_left"
          v-model="displayingValue"
        />
        <label class="blocks-page__radio-label" for="radio-display-left">
          Зображення зліва, текст справа
        </label>
      </div>
      <div class="blocks-page__radio">
        <input
          id="radio-display-chess"
          type="radio"
          name="display"
          value="img_chess"
          v-model="displayingValue"
        />
        <label class="blocks-page__radio-label" for="radio-display-chess">
          Зображення в шаховому порядку
        </label>
      </div>
    </div>

    <div class="blocks-page__blocks">
      <BlockComponent
        v-for="(movie, index) in movies"
        :key="movie.id"
        :movie="movie"
        :reversed="displayingValue === 'img_chess' && index % 2 !== 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockComponent from '@/components/shared/BlockComponent.vue';
import { computed, onMounted, ref } from 'vue';

import { useAlertsStore } from '@/stores/alerts.store';

import type { IMovie } from '@/types';
import { useMoviesApi } from '@/api/movies.api';

const alertsStore = useAlertsStore();

const { loadMovies } = useMoviesApi();

const moviesFromServer = ref<IMovie[]>([]);

const sortingValue = ref<'standard' | 'alphabetical'>('standard');
const displayingValue = ref<'img_left' | 'img_chess'>('img_left');

const movies = computed(() => {
  if (sortingValue.value === 'standard') {
    return moviesFromServer.value;
  } else {
    return moviesFromServer.value.slice().sort((a, b) => a.title.localeCompare(b.title));
  }
});

onMounted(async () => {
  try {
    moviesFromServer.value = (await loadMovies(1)).results;
    console.log(movies.value);
  } catch (error) {
    alertsStore.add({ message: 'Щось пішло не так', severity: 'error' });
  }
});
</script>

<style scoped lang="scss">
  .blocks-page {
    margin-bottom: 40px;

    &__title {
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__blocks {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &__sorting {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      margin-bottom: 20px;
    }

    &__radio {
      display: flex;
      gap: 8px;
    }
  }
</style>
