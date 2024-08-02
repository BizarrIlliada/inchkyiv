import { type DirectiveBinding } from 'vue';

function applyPhoneMask(value: string): string {
  const cleanValue = value.replace(/\D/g, '').slice(0, 10);
  const match = cleanValue.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

  if (!match) {
    return value;
  }

  return `${match[1] ? `(${match[1]}` : ''}${match[2] ? `) ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}${match[4] ? `-${match[4]}` : ''}`;
}

interface MaskedInputElement extends HTMLInputElement {
  _updateMask?: (event: Event) => void;
}

export const phoneMaskDirective = {
  beforeMount(el: MaskedInputElement, binding: DirectiveBinding) {
    const updateMask = (event: Event) => {
      if (binding.value) {
        const input = event.target as HTMLInputElement;
        const maskedValue = applyPhoneMask(input.value);
        if (input.value !== maskedValue) {
          input.value = maskedValue;
          setTimeout(() => {
            input.dispatchEvent(new Event('input'));
          });
        }
      }
    };

    el.addEventListener('input', updateMask);
    el._updateMask = updateMask;
  },
  unmounted(el: MaskedInputElement) {
    if (el._updateMask) {
      el.removeEventListener('input', el._updateMask);
      delete el._updateMask;
    }
  }
};
