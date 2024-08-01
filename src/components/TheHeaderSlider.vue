<template>
  <TransitionGroup tag="div" class="slider" name="slider" @leave="leave">
    <TheHeaderSlide
      v-for="slide in slides.slice(0, 3)"
      :key="slide.id"
      :id="slide.id"
      :bgc="slide.bgc"
      :slidesLength="slides.length"
      @nextSlide="nextSlide"
    ></TheHeaderSlide>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import TheHeaderSlide from './TheHeaderSlide.vue';

import { ref } from 'vue';

const slides = ref([
  {
    id: 1,
    bgc: '#027d84',
  },
  {
    id: 2,
    bgc: '#4a989a',
  },
  {
    id: 3,
    bgc: '#afb3b4',
  },
  // {
  //   id: 4,
  //   bgc: '#afb',
  // },
]);

function nextSlide() {
  const [firstEl, ...restElements] = slides.value;

  slides.value = [...restElements, firstEl];
}

function leave(el: Element) {
  console.log(el);
}
</script>

<style scoped lang="scss">
.slider {
  height: 100%;
  position: relative;

  & > * {
    position: absolute;
    transition: transform .3s;
  }

  & > :nth-child(1) {
    z-index: 2;
  }

  & > :nth-child(2) {
    transform: translateX(40px);
    z-index: 1;

    @include tablet {
      transform: translateX(20px);
    }
  }

  & > :nth-child(3) {
    transform: translateX(80px);

    @include tablet {
      transform: translateX(40px);
    }
  }
}

.slider-leave-active {
  transition: all .3s ease-out;
}

.slider-leave-to {
  transform: translateX(-100%);
}
</style>../../components/HomeSlide.vue./HeaderSlide.vue./TheHeaderSlide.vue
