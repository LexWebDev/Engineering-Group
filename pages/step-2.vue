<template>
  <b-container class="pt-3 pb-3">
    <app-top
      img-link="/img/bg-questionary.jpg"
      title="Региональный управляющий"
      subtitle="Анкетирование"
      card-text="Это займет всего: <span style='font-weight:700'>3 минуты</span>"
    />
    <app-step-two />
  </b-container>
</template>

<script>
import AppTop from '@/components/questionary/AppTop'
import AppStepTwo from '@/components/questionary/AppStepTwo'

export default {
  middleware: 'step',
  components: { AppStepTwo, AppTop }
}
</script>
