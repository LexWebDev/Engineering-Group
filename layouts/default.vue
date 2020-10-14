<template>
  <div class="bg-accent">
    <transition name="fade">
      <Nuxt />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.bg-accent {
  background-color: $bg-light;
  min-height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<script>
export default {
}
</script>
