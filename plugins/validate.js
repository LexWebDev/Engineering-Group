import { extend } from 'vee-validate'
import { required, regex } from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  message: 'Это поле обязательно к заполнению'
})

extend('regex', {
  ...regex,
  message: 'Телефон введен некорректно'
})
