<template>
  <validation-observer v-slot="{ invalid }">
    <b-row class="justify-content-center">
      <b-col cols="12" lg="6" class="mt-3">
        <b-card>
          <label
            class="label"
            for="name"
          >
            {{ form.label }} <span>*</span>
          </label>
          <validation-provider v-slot="{ errors }" rules="required" name="name">
            <input
              id="name"
              v-model="form.fullAnswer"
              class="input"
              type="text"
              placeholder="Развернутый ответ"
            >
            <div class="invalid">
              {{ errors[0] }}
            </div>
          </validation-provider>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="6" class="mt-3 text-right">
        <b-btn
          ref="btnShow"
          variant="secondary"
          :disabled="invalid"
          @click="submit(form.fullAnswer)"
        >
          Спец. предложение
        </b-btn>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'AppStepTwo',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      label: '',
      fullAnswer: ''
    }
  }),
  mounted () {
    const variables = {
      one: 'Да (функция - коммерческий представитель: поставка материалов / монтажные работы / услуги)',
      two: 'Да (технический персонал)',
      three: 'Нет (но есть большой опыт работы управленцем)',
      four: 'Нет (но есть большое желание учиться)'
    }
    if (this.$store.getters.getFormData.experience === variables.one) {
      this.form.label = 'Перечислите основных "заказчиков" опыт работы с которыми имеется у Вас? (пример: промышленность - ЛукОйл, Еврохим, Транснефть; застройщики жилья - ГИК, ПИК, ЮСИ; коммерческая стройка - Теплицы, фермы, офисы) Если есть иные "связи" укажите их возможности.'
    } else if (this.$store.getters.getFormData.experience === variables.two) {
      this.form.label = 'Так как вакансия регионального управляющего в первую очередь содержит функцию коммерческого представления интересов компании в регионе. Есть ли связи и личные отношения внутри компаний заказчиков? (пример: ЛукОйл, Еврохим, Ростелеком, застройщик жилья, коммерческая стройка, промышленное предприятие, административный ресурс) Если есть иные "полезные" связи также укажите возможности.'
    } else if (this.$store.getters.getFormData.experience === variables.three) {
      this.form.label = 'Вы приступили к своим обязанностям в компании. С чего вы начнете? (план 1-3 месяца)'
    } else if (this.$store.getters.getFormData.experience === variables.four) {
      this.form.label = 'Опишите Ваш опыт работы в других сферах'
    }
  },
  methods: {
    submit (fAnswer) {
      this.$store.dispatch('updateAnswer', fAnswer)

      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
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
</style>
