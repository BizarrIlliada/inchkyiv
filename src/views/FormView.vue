<template>
  <div class="form-page container">
    <h3 class="form-page__title">
      Form Page
    </h3>

    <form class="form-page__form form">
      <div class="form__content">
        <h4 class="form__subtitle">
          Представтеся, будь ласка
        </h4>

        <div class="form__input-group">
          <label class="form__input-label" for="last-name-input">
            Прізвище *
          </label>
          <MyInput
            id="last-name-input"
            class="form__input"
          ></MyInput>
        </div>

        <div class="form__input-group">
          <label class="form__input-label" for="name-input">
            Імʼя *
          </label>
          <MyInput
            id="name-input"
            class="form__input"
          ></MyInput>
        </div>

        <div class="form__input-group">
          <label class="form__input-label" for="company-input">
            Організація та посада
          </label>
          <MyInput
            id="company-input"
            class="form__input"
          ></MyInput>
        </div>
      </div>
      <div class="form__content">
        <h4 class="form__subtitle">
          Контактна інформація
        </h4>
        <MyInput></MyInput>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useValidationRules } from '@/tools/hooks/validation-rules';
</script>

<style scoped lang="scss">
  .form-page {
    margin-bottom: 40px;

    &__title {
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }

  .form {
    display: flex;
    justify-content: center;
    gap: 140px;

    &__content {
      min-width: 296px;
      max-width: 400px;
    }

    &__subtitle {
      text-align: center;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__input-group {}

    &__input-label {
      text-transform: uppercase;
    }

    &__input {
      margin-bottom: 20px;
    }
  }
</style>
