<template>
  <b-container class="pt-4 pb-4">
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <div class="block-img">
              <b-img src="/img/img-3.jpg" />
              <h1 class="section-title">
                «Штат»
              </h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div class="content-title">
              Уже с опытом
            </div>
            <p class="content">
              Вы обладаете <span class="accent-text">большим</span> опытом в строительной сфере и
              <span class="accent-text">обширными</span> связями с ЛПР. Есть текущие
              <span class="accent-text">наработки</span> по потенциальным <span class="accent-text">проектам</span>.
              Вам <span class="accent-text">интересна</span> должность в штате компании
              <span class="bold">«Engineering Group».</span>
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
  name: 'AppStaff',
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
        lastStep = 'Штат'
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
