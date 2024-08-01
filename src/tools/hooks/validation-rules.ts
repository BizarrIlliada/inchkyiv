export function useValidationRules() {
  function requiredRule(value: string) {
    if (!value || !value.length) {
      return 'Це поле обовʼязкове';
    }

    return true;
  }

  function cyrillicOnlyRule(value: string) {
    if (!value || /^[А-Яа-яЁёІіЇїЄєҐґ ]+$/.test(value)) {
      return true;
    }

    return 'Дозволена лише кирилиця';
  }

  function numbersOnlyRule(value: string) {
    if (!value || /^\d+$/.test(value)) {
      return true;
    }

    return 'Дозволені лише цифри';
  }

  function numbersAndCyrillicRule(value: string) {
    if (!value || /^[\dА-Яа-яЁёІіЇїЄєҐґ\s]+$/.test(value)) {
      return true;
    }

    return 'Дозволена лише кирилиця та цифри';
  }

  function emailRule(value: string) {
    if (!value || /^[a-zA-Z0-9._%+-]+[^.]@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return true;
    }

    return 'Email повинен бути коректним';
  }

  function addressRule(value: string) {
    if (!value || /^[\dА-Яа-яЁёІіЇїЄєҐґ/,.\-\s]+$/.test(value)) {
      return true;
    }

    return 'Адреса повинна бути коректна';
  }

  return {
    requiredRule,
    emailRule,
    numbersOnlyRule,
    cyrillicOnlyRule,
    numbersAndCyrillicRule,
    addressRule,
  }
}
