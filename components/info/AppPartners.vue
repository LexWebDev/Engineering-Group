<template>
  <b-container class="pt-4 pb-4">
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <div class="block-img">
              <b-img src="/img/img-1.jpg" />
              <h1 class="section-title">
                «Партнерство»
              </h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div class="content-title">
              Условия
            </div>
            <p class="content">
              Вы продолжаете работу в <span class="accent-text">текущей</span> компании
              и <span class="bold">параллельно</span> используя
              возможности <span class="bold">«Engineering Group»</span> расширяете
              спектр <span class="accent-text">предложения</span> услуг Вашим заказчикам.
            </p>
          </b-col>
          <b-col cols="12">
            <div class="content-title">
              Пример взаимодействия:
            </div>
            <p class="content">
              Работая к <span class="accent-text">примеру</span> в сантехнической компании поставляете
              <span class="accent-text">профильный</span> материал на обьект строительства и параллельно
              <span class="accent-text">выявляете</span> потребность заказчика
              <span class="accent-text">в поставке</span> и <span class="accent-text">монтаже</span>:
              вентиляции, электрики, «пожарки», фасадных работ и т.д.
            </p>
          </b-col>
          <b-col cols="12">
            <div class="content-title">
              Процент от контракта:
            </div>
            <p class="content">
              <span class="accent-text">Закрыв</span> потребности заказчика в любом из разделов строительства
              (поставка/монтаж) Вы получаете <span class="accent-text">премию 10% — 30%</span> от
              <span class="accent-text">прибыли</span> контракта.
            </p>
          </b-col>
          <b-col cols="12">
            <div class="content-title">
              Важно все
            </div>
            <p class="content">
              Оценивается все, в том числе и просто предоставление контактных данных заказчика.
              <span class="accent-text">Проанализируйте</span> Ваше окружение кто может быть такой
              <span class="accent-text">«точкой входа»</span> в строительный <span class="accent-text">проект</span>.
            </p>
          </b-col>
          <b-col cols="12">
            <div class="content-title">
              Своих не бросаем
            </div>
            <p class="content">
              Компания закрепляет за Вами <span class="accent-text">ассистента</span> и
              <span class="accent-text">наставника</span>. (<span class="accent-text">Консультируют</span> по всем
              возникающим вопросам <span class="accent-text">предоставляют</span> все необходимые документы,
              <span class="accent-text">подготавливают</span> счета и КП, осуществляют совместные
              выезды, <span class="accent-text">«дожимают»</span> по требованию заказчиков.
            </p>
          </b-col>
          <b-col cols="12">
            <div class="content-title">
              Наивысший приоритет
            </div>
            <p class="content">
              Успешный участник программы <span class="accent-text">«Партнерство»</span> всегда
              <span class="accent-text">в приоритете</span> рассматривается компанией на
              <span class="accent-text">оформление</span> в штат.
            </p>
          </b-col>
          <b-col cols="12" class="mt-4">
            <b-btn
              variant="primary"
              class="info-btn"
              @click="submit(form.lastStep)"
            >
              Пройти собеседование
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AppPartners',
  data: () => ({
    form: {
      lastStep: ''
    }
  }),
  methods: {
    submit (lastStep) {
      const name = this.$store.getters.getFormData.name
      const phone = this.$store.getters.getFormData.phone
      const city = this.$store.getters.getFormData.city
      const experience = this.$store.getters.getFormData.experience
      const sections = this.$store.getters.getFormData.sections
      const fullAnswer = this.$store.getters.getFormData.fullAnswer

      if (name !== null &&
        phone !== null &&
        city !== null &&
        experience !== null &&
        sections !== null &&
        fullAnswer !== null) {
        lastStep = 'Партнерство'
        this.$store.dispatch('updateLastStep', lastStep)

        const lStep = this.$store.getters.getFormData.lastStep
        const url = 'https://script.google.com/macros/s/AKfycbz8WZdS2vQdoqHM1yfCypaN0p3mOISTRLBIKtkReQT7VFhuNuNu/exec'
        const params =
          `name=${name}&phone=${phone}&city=${city}&experience=${experience}&sections=${sections}&fAnswer=${fullAnswer}&lastStep=${lStep}`

        this.$axios.$get(`${url}?${params}`)
        this.$bvToast.toast('Форма успешно отправлена!', {
          title: 'Успех!',
          variant: 'success',
          solid: true
        })
        this.$store.dispatch('resetState')
        setTimeout(() => this.$router.push({ name: 'index' }), 2000)
      } else {
        this.$bvToast.toast('Необходимо заполнить анкету!', {
          title: 'Ошибка!',
          variant: 'danger',
          solid: true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-title {
  margin-top: 30px
}
.block-img {
  position: relative;
  img {
    border-radius: 6px;
    width: 100%;
    max-height: 240px;
  }
  .section-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    line-height: 1;
    background-color: rgba(#000, .79);
    margin-bottom: 0;
  }
}
</style>
