<template>
  <div class="my-textarea">
    <textarea
      :id="id"
      cols="30"
      rows="10"
      :class="textareaClasses"
      :value="modelValue"
      @input="onInput"
    ></textarea>
  
      <Transition name="textarea-error">
        <small v-if="invalid && errorMessage" class="my-textarea__error">
          {{ errorMessage }}
        </small>
      </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'MyTextarea',
});

const emits = defineEmits(['update:modelValue']);

interface Props {
  id: string;
  modelValue: string;
  placeholder?:string;
  invalid?: boolean;
  errorMessage: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '',
  invalid: false,
  errorMessage: '',
});

const textareaClasses = computed(() => {
  const mainClass = 'my-textarea__textarea';
  const classes = [mainClass];

  if (props.invalid) {
    classes.push(mainClass + '--invalid');
  }

  return classes;
});

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;

  emits('update:modelValue', target.value);
}
</script>

<style scoped lang="scss">
  .my-textarea {
    position: relative;

    &__textarea {
      width: 100%;
      padding: 8px;
      background-color: transparent;
      border-bottom: 1px solid $surface-400;
      outline: none;
      color: $green-900;
      font-size: 16px;
      line-height: 20px;
      transition: .3s;
      resize: none;
  
      &:focus {
        border-color: $green-primary;
  
        &::placeholder {
          color: $green-primary;
        }
      }

      &::placeholder {
        color: $surface-500;
        transition: .3s;
      }

      &--invalid {
        border-color: $red-600;

        &:focus {
          border-color: $red-600;
        }

        &::placeholder {
          color: $red-600;
        }
      }
    }

    &__error {
      position: absolute;
      left: 0;
      bottom: -20px;
      transform: translateY(0);
      opacity: 1;
      color: $red-600;
      font-size: 13px;
      line-height: 18px;
    }
  }

  .textarea-error-enter-active,
  .textarea-error-leave-active {
    transition: .3s ease;
  }

  .textarea-error-enter-from,
  .textarea-error-leave-to {
    transform: translateY(-30%);
    opacity: 0;
  }
</style>
