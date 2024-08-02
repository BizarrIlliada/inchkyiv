<template>
  <div class="block" :class="{ 'block--reversed': reversed }">
    <img class="block__img" :src="imgUrl" :alt="movie.title + ' poster'">

    <div class="block__info">
      <h4 class="block__title">
        {{ movie.title }}
      </h4>
      <p class="block__overview">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMovie } from '@/types';

interface Props {
  movie: IMovie;
  reversed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reversed: false,
});

const imgUrl = '//image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.movie.poster_path;
</script>

<style scoped lang="scss">
  .block {
    display: flex;
    gap: 30px;
    padding: 30px 20px;
    border: 1px solid black;

    @include tablet {
      flex-direction: column;
    }

    &--reversed {
      flex-direction: row-reverse;

      @include tablet {
        flex-direction: column-reverse;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }

    &__title {
      font-size: 22px;
    }
  }
</style>