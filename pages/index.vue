<template>
  <div>
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
    <app-modal />
  </div>
</template>

<script>
import AppTop from '@/components/questionary/AppTop'
import AppCards from '@/components/questionary/AppCards'
import AppModal from '@/components/info/AppModal'

export default {
  components: { AppModal, AppCards, AppTop },
  methods: {
  }
}
</script>
