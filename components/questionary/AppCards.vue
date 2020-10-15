<template>
  <validation-observer v-slot="{ invalid }">
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3">
        <b-card>
          <label
            class="label"
            for="name"
          >
            Ваше имя <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" rules="required" name="name">
            <input
              id="name"
              v-model="form.name"
              placeholder="Мой ответ"
              class="input"
              required
            >
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3">
        <b-card>
          <label
            class="label"
            for="phone"
          >
            Телефон (тот что указан в резюме) <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" name="phone" :rules="{ required: true, regex: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ }">
            <input
              id="phone"
              v-model="form.phone"
              required
              class="input"
              placeholder="Мой ответ"
            >
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3">
        <b-card>
          <label
            class="label"
            for="city"
          >
            Ваш город <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" name="city" rules="required">
            <input
              id="city"
              v-model="form.city"
              class="input"
              type="text"
              placeholder="Мой ответ"
            >
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3">
        <b-card>
          <label
            class="label"
          >
            Есть опыт работы в строительной сфере? <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" name="experience" rules="required">
            <b-form-radio
              v-model="form.experience"
              value="Да (функция - коммерческий представитель: поставка материалов / монтажные работы / услуги)"
            >
              Да (функция - коммерческий представитель: поставка материалов / монтажные работы / услуги)
            </b-form-radio>
            <b-form-radio
              v-model="form.experience"
              value="Да (технический персонал)"
            >
              Да (технический персонал)
            </b-form-radio>
            <b-form-radio
              v-model="form.experience"
              value="Нет (но есть большой опыт работы управленцем)"
            >
              Нет (но есть большой опыт работы управленцем)
            </b-form-radio>
            <b-form-radio
              v-model="form.experience"
              value="Нет (но есть большое желание учиться)"
            >
              Нет (но есть большое желание учиться)
            </b-form-radio>
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3">
        <b-card>
          <label
            class="label"
          >
            Укажите разделы строительства в которых у Вас есть опыт работы (поставка материалов/услуги/монтаж) <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" name="experience" rules="required">
            <b-form-radio
              v-for="(data, idx) in dataSections"
              :key="idx"
              v-model="form.sections"
              :value="data.value"
            >
              {{ data.value }}
            </b-form-radio>
            <div class="radio-other">
              <b-form-radio
                v-model="form.sections"
                class="mb-0"
                value="Другое"
              >
                Другое
              </b-form-radio>
              <input
                v-if="inputVisibility"
                v-model="form.sectionOther"
                type="text"
                class="input"
                placeholder="Мой ответ"
              >
            </div>
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8" class="mt-3 text-right">
        <b-btn
          variant="secondary"
          :disabled="invalid"
          @click="updateData(form)"
        >
          Далее
        </b-btn>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'AppCards',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      name: '',
      phone: '',
      city: '',
      experience: '',
      sections: '',
      sectionOther: ''
    },
    dataSections: [
      {
        value: 'Ген подряд'
      },
      {
        value: 'Электрика'
      },
      {
        value: 'Сантехника'
      },
      {
        value: 'Вентиляция'
      },
      {
        value: 'Автоматизация'
      },
      {
        value: 'Монолит'
      },
      {
        value: 'Общестрой'
      },
      {
        value: 'Отопление'
      }
    ],
    inputVisibility: false
  }),
  methods: {
    updateData (full) {
      this.$store.dispatch('updateFull', full)

      this.$router.push({ name: 'step-2' })
    }
  }
}
</script>

<style lang="scss">
.label {
  display: block;
  span {
    color: red;
  }
}
.input {
  border: none;
  width: 100%;
  border-bottom: 1px solid rgba(#000, .1);
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(#000, 1);
  }
}
.custom-control {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.custom-control-label {
  cursor: pointer;
}
.radio-other {
  display: flex;
  align-items: center;
  .input {
    margin-left: 15px;
  }
}
::placeholder {
  color: #A3A3A3;
  font-weight: 300;
}
.btn {
  font-family: Roboto, sans-serif;
  border-radius: 8px;
  padding-left: 35px;
  padding-right: 35px;
  font-weight: 400;
}
.invalid {
  margin-top: 5px;
  color: #dc3545;
}
</style>
