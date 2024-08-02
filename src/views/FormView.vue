<template>
  <div class="form-page">
    <h3 class="form-page__title">
      Form Page
    </h3>

    <form class="form-page__form form" @submit="onSubmit">
      <div class="form__content">
        <h4 class="form__subtitle">
          Представтеся, будь ласка
        </h4>

        <div class="form__input-group">
          <label class="form__input-label" for="last-name-input">
            * Прізвище
          </label>
          <MyInput
            id="last-name-input"
            class="form__input"
            :invalid="!!errors.lastName"
            :errorMessage="errors.lastName"
            v-model="lastName"
          ></MyInput>
        </div>

        <div class="form__input-group">
          <label class="form__input-label" for="first-name-input">
            * Імʼя
          </label>
          <MyInput
            id="first-name-input"
            class="form__input"
            :invalid="!!errors.firstName"
            :errorMessage="errors.firstName"
            v-model="firstName"
          ></MyInput>
        </div>

        <div class="form__input-group">
          <label class="form__input-label" for="company-input">
            Організація та посада
          </label>
          <MyInput
            id="company-input"
            class="form__input"
            :invalid="!!errors.company"
            :errorMessage="errors.company"
            v-model="company"
          ></MyInput>

          <div class="form__radio-group">
            <div class="form__radio">
              <input
                id="radio-role-client"
                type="radio"
                name="role"
                value="client"
                v-model="role"
              />
              <label class="form__input-label" for="radio-role-client">Споживач</label>
            </div>
            <div class="form__radio">
              <input
                id="radio-role-medical-worker"
                type="radio"
                name="role"
                value="medical_worker"
                v-model="role"
              />
              <label class="form__input-label" for="radio-role-medical-worker">Медичний працівник</label>
            </div>
            <div class="form__radio">
              <input
                id="radio-role-reporter"
                type="radio"
                name="role"
                value="reporter"
                v-model="role"
              />
              <label class="form__input-label" for="radio-role-reporter">Журналіст</label>
            </div>
          </div>
        </div>

        <h4 class="form__subtitle">
          Повідомлення
        </h4>

        <div class="form__input-group">
          <label class="form__input-label" for="message-topic-input">
            Тема повідомлення
          </label>
          <MyInput
            id="message-topic-input"
            class="form__input"
            :invalid="!!errors.messageTopic"
            :errorMessage="errors.messageTopic"
            v-model="messageTopic"
          ></MyInput>
        </div>

        <div class="form__input-group">
          <label class="form__input-label form__input-label--textarea" for="message-input">
            * Повідомлення
          </label>
          <MyTextarea
            id="message-textarea"
            class="form__input"
            :invalid="!!errors.message"
            :errorMessage="errors.message"
            v-model="message"
          ></MyTextarea>
        </div>
      </div>

      <div class="form__content">
        <h4 class="form__subtitle">
          Контактна інформація
        </h4>

        <div class="form__input-group">
          <label class="form__input-label" for="email-input">
            * Email
          </label>
          <MyInput
            id="email-input"
            class="form__input"
            :invalid="!!errors.email"
            :errorMessage="errors.email"
            v-model.trim="email"
          ></MyInput>
        </div>
        <div class="form__input-group">
          <label class="form__input-label" for="country-input">
            Країна
          </label>
          <MyInput
            id="country-input"
            class="form__input"
            :invalid="!!errors.country"
            :errorMessage="errors.country"
            v-model="country"
          ></MyInput>
        </div>
        <div class="form__input-group">
          <label class="form__input-label" for="city-input">
            Місто
          </label>
          <MyInput
            id="city-input"
            class="form__input"
            :invalid="!!errors.city"
            :errorMessage="errors.city"
            v-model="city"
          ></MyInput>
        </div>
        <div class="form__input-group">
          <label class="form__input-label" for="zip-input">
            Індекс
          </label>
          <MyInput
            id="zip-input"
            type="number"
            class="form__input"
            :invalid="!!errors.zip"
            :errorMessage="errors.zip"
            v-model="zip"
          ></MyInput>
        </div>
        <div class="form__input-group">
          <label class="form__input-label" for="address-input">
            Адреса
          </label>
          <MyInput
            id="address-input"
            class="form__input"
            :invalid="!!errors.address"
            :errorMessage="errors.address"
            v-model="address"
          ></MyInput>
        </div>
        <div class="form__input-group form__input-group--last">
          <label class="form__input-label" for="phone-input">
            * Телефон
          </label>
          <MyInput
            id="phone-input"
            class="form__input"
            type="phone"
            :invalid="!!errors.phone"
            :errorMessage="errors.phone"
            v-model="phone"
          ></MyInput>
        </div>

        <MyButton class="form__button">Відправити</MyButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField, defineRule } from 'vee-validate';
import { useAlertsStore } from '@/stores/alerts.store';
import { useValidationRules } from '@/tools/hooks/validation-rules';

const alertsStore = useAlertsStore();

const {
  requiredRule,
  cyrillicOnlyRule,
  emailRule,
  numbersOnlyRule,
  addressRule,
  numbersAndCyrillicRule,
  phoneRule,
} = useValidationRules();

defineRule('required', requiredRule);
defineRule('cyrillicOnly', cyrillicOnlyRule)
defineRule('email', emailRule);
defineRule('numbers', numbersOnlyRule);
defineRule('address', addressRule);
defineRule('numbersAndCyrillic', numbersAndCyrillicRule);
defineRule('phone', phoneRule);

const { handleSubmit, errors, resetForm } = useForm();

const { value: lastName } = useField('lastName', 'required|cyrillicOnly');
const { value: firstName } = useField('firstName', 'required|cyrillicOnly');
const { value: company } = useField('company', 'cyrillicOnly');
const { value: role } = useField('role');
const { value: messageTopic } = useField('messageTopic', 'numbersAndCyrillic');
const { value: message } = useField('message', 'required|numbersAndCyrillic');
const { value: email } = useField('email', 'required|email');
const { value: country } = useField('country', 'cyrillicOnly');
const { value: city } = useField('city', 'cyrillicOnly');
const { value: zip } = useField('zip', 'numbers');
const { value: address } = useField('address', 'address');
const { value: phone } = useField('phone', 'required|phone');

const onSubmit = handleSubmit((values) => {
  console.log(values);

  alertsStore.add({ message: 'Форма успішно відправлена!', severity: 'success' });
  resetForm();
});
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
    justify-content: space-evenly;
    flex-wrap: wrap;

    &__content {
      width: 290px;
    }

    &__subtitle {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__input-group {
      &--last {
        margin-bottom: 48px;
      }
    }

    &__input-label {
      display: inline-block;
      font-size: 12px;
      text-transform: uppercase;

      &--textarea {
        margin-bottom: 10px;
      }
    }

    &__input {
      margin-bottom: 24px;
    }

    &__radio-group {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      margin-bottom: 20px;
    }

    &__radio {
      display: flex;
      gap: 8px;
      text-transform: uppercase;
    }

    &__button {
      width: 100%;
    }
  }
</style>
