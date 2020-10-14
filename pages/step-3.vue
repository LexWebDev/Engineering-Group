<template>
  <b-container class="pt-3 pb-3">
    <app-top
      img-link="img/winner.jpg"
      title="Выберите способ взаимодействия"
      subtitle="который Вам более интересен"
      btn-link="/info/vacancy"
      btn-text="Ознакомиться"
    />
  </b-container>
</template>

<script>
import AppTop from '@/components/questionary/AppTop'

export default {
  middleware: 'step',
  components: { AppTop }
}
</script>
