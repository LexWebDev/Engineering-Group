<template>
  <div>
    <validation-observer v-slot="{ invalid }">
      <b-row class="justify-content-center">
        <b-col cols="12" lg="8" class="mt-3">
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
        <b-col cols="12" lg="8" class="mt-3">
          <b-card>
            <app-adaptation />
          </b-card>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="8" class="mt-3">
          <b-card
            align="center"
            title="Выберите способ взаимодействия:"
            sub-title="По клику откроется подробное описание"
          />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="8" class="mt-3 text-center">
          <b-btn
            v-model="tabIndex"
            variant="secondary"
            class="button-two"
            :disabled="invalid"
            @click="submitPartners(form.fullAnswer)"
          >
            Партнерство
          </b-btn>
          <b-btn
            v-model="tabIndex"
            variant="secondary"
            class="button-two"
            :disabled="invalid"
            @click="submitStaff(form.fullAnswer)"
          >
            Штат
          </b-btn>
        </b-col>
      </b-row>
    </validation-observer>
    <app-modal :tab-index="tabIndex" />
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import AppAdaptation from '@/components/questionary/AppAdaptation'
import AppModal from '@/components/info/AppModal'

export default {
  name: 'AppStepTwo',
  components: {
    AppModal,
    AppAdaptation,
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    form: {
      label: '',
      fullAnswer: ''
    },
    tabIndex: 0
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
    submitPartners (fAnswer) {
      this.$store.dispatch('updateAnswer', fAnswer)

      this.tabIndex = 1

      this.$bvModal.show('modal-1')
    },
    submitStaff (fAnswer) {
      this.$store.dispatch('updateAnswer', fAnswer)

      this.tabIndex = 2

      this.$bvModal.show('modal-1')
    }
  }
}
</script>

<style lang="scss">
.card-img-overlay {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}
.card-title {
  font-weight: bold;
}
.card-subtitle {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
}
.text-muted {
  color: #91989e;
}
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
.button-two {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  width: 170px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
}
@media (max-width: 1200px) {
  .card-img-overlay {
    padding-top: 3.5rem !important;
    padding-bottom: 3.5rem !important;
  }
}
@media (max-width: 500px) {
  .card-img-overlay {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
}
@media (max-width: 410px) {
  .button-two {
    margin-right: 0;
    width: 100%;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
