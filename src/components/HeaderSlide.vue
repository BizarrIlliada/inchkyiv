<template>
  <div class="slide" :style="{ backgroundColor: bgc }">
    <header class="slide__header">
      <h3 class="slide__header-title">
        Lorem ipsum dolor sit amet
      </h3>
    </header>

    <h1 class="slide__title grid">
      <span class="
        slide__title-part
        slide__title-part--first
        grid__item--desktop-1-16
        grid__item--tablet-1-12
        grid__item--phone-1-8">Lorem ipsum {{ id }}</span>
      <br>
      <span class="
        slide__title-part
        slide__title-part--second
        grid__item--desktop-2-16
        grid__item--tablet-2-12
        grid__item--phone-2-8">Lorem ipsum dolor —</span>
      <br>
      <span class="
        slide__title-part
        slide__title-part--third
        grid__item--desktop-7-16
        grid__item--tablet-7-12
        grid__item--phone-4-8">Lorem</span>
      <br>
      <span class="
        slide__title-part
        slide__title-part--fourth
        grid__item--desktop-4-16
        grid__item--tablet-4-12
        grid__item--phone-3-8">Ipsum !</span>
      <span class="
        slide__title-part
        slide__title-part--fifth
        grid__item--desktop-7-16
        grid__item--tablet-8-12
        grid__item--phone-4-8">Lorem ipsum dolor sit amet,<br>consectetur adipisicing elit</span>
    </h1>

    <div class="slide__ellipse"></div>
    <StarIcon class="slide__star" />
    <img class="slide__dog-ellipses" src="@/assets/images/Ellipses.png" alt="Background">
    <div class="slide__page-counter">
      <!-- TODO: display correct current slide position -->
      {{ id + '/' + slidesLength }}
    </div>
    <button class="slide__next-button" @click="nextSlide">
      <img src="@/assets/images/ViewNext.png" alt="Next">
    </button>
  </div>
</template>

<script setup lang="ts">
import StarIcon from '@/assets/images/icons/StarIcon.vue';
interface Props {
  id: number;
  bgc: string;
  slidesLength: number;
}

defineProps<Props>();

const emits = defineEmits(['nextSlide']);

function nextSlide() {
  emits('nextSlide');
}
</script>

<style scoped lang="scss">
  .slide {
    height: 100%;
    width: calc(100% - 80px);
    position: relative;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    border: 1px solid black;
    border-top-right-radius: 90px;
    border-bottom-right-radius: 90px;

    @include tablet {
      width: calc(100% - 40px);
      border-color: transparent;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
    }

    &__header {
      padding: 18px;
      margin-bottom: 64px;

      @include tablet {
        padding: 12px;
      }
    }

    &__header-title {
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      white-space: nowrap;
      margin-left: 230px;

      @include tablet {
        margin-left: 120px;
      }

      @include phone {
        margin-left: 10px;
      }
    }

    &__title {
      position: absolute;
      left: 15%;
      width: min-content;
      display: grid;
      grid-template-columns: repeat(16, 40px);
      grid-template-rows: auto auto auto;
      gap: 10px;
      color: #fff;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: 60px;

      @include tablet {
        grid-template-columns: repeat(14, 30px);
        font-size: 40px;
        left: 10%;
      }

      @include phone {
        grid-template-columns: repeat(14, 30px);
        font-size: 30px;
      }
    }

    &__title-part {
      font-weight: normal;

      &--first {
        font-weight: bold;
      }

      &--second {
        stroke: 1px black;
        text-shadow:
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000,
         2px  2px 5px rgba(0, 0, 0, 0.5);

         @include tablet {
          text-shadow: none;
         }
      }

      &--third {}

      &--fourth {
        margin-bottom: 20px;

        @include tablet {
          margin-bottom: none;
         }
      }

      &--fifth {
        font-size: 15px;
      }
    }

    &__star {
      position: absolute;
      top: 430px;

      @include tablet {
        top: 260px;
        left: -60px;
      }
    }

    &__ellipse {
      position: absolute;
      width: 463px;
      height: 240px;
      transform: rotateZ(13.28deg);
      top: -170px;
      left: 10%;
      z-index: -1;
      border-radius: 50% / 50%;
      background-color: #afb3b4;

      @include tablet {
        width: 378px;
        height: 196px;
        top: -130px;
        right: 20%;
      }

      @include phone {
        top: -130px;
        left: -40px;
      }
    }

    &__dog-ellipses {
      position: absolute;
      right: 5%;
      z-index: -1;

      @include tablet {
        transform: scale(.8);
        bottom: 0;
        right: 10%;
      }

      @include phone {
        right: -30%;
      }
    }

    &__page-counter {
      position: absolute;
      bottom: 30px;
      left: 20px;
      height: 55px;
      width: 100px;
      border-radius: 50% / 50%;
      border: 2px solid #fff;
      color: #fff;
      display: none;

      @include tablet {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__next-button {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background-color: transparent;
      border: none;

      @include tablet {
        transform: none;
      }
    }
  }
</style>
