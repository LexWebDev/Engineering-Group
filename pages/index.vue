<template>
  <b-container fluid="md" class="pt-3 pb-3">
    <app-top
      img-link="img/bg-questionary.jpg"
      title="Региональный управляющий"
      subtitle="Анкетирование"
      card-text="Это займет всего: <span style='font-weight:700'>3 минуты</span>"
      btn-text="Подробнее"
    />
    <app-cards />
  </b-container>
</template>

<script>
import AppTop from '@/components/questionary/AppTop'
import AppCards from '@/components/questionary/AppCards'

export default {
  components: { AppCards, AppTop },
  methods: {
  }
}
</script>
