<template>
  <div>
    <b-modal
      id="modal-1"
      hide-backdrop
    >
      <b-tabs pills>
        <b-tab title="О вакансии" active>
          <app-vacancy />
        </b-tab>
        <b-tab title="Партнерство">
          <app-partners />
        </b-tab>
        <b-tab title="Адаптация">
          <app-adaptation />
        </b-tab>
        <b-tab title="Штат">
          <app-staff />
        </b-tab>
        <b-tab title="Материалы">
          <app-materials />
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
import AppVacancy from '@/components/info/AppVacancy'
import AppPartners from '@/components/info/AppPartners'
import AppAdaptation from '@/components/info/AppAdaptation'
import AppStaff from '@/components/info/AppStaff'
import AppMaterials from '@/components/info/AppMaterials'
export default {
  name: 'AppModal',
  components: { AppMaterials, AppStaff, AppAdaptation, AppPartners, AppVacancy },
  methods: {
  }
}
</script>

<style lang="scss">
.modal-header {
  border-bottom: none;
  padding: 0 1rem;
  .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {
    opacity: 1;
  }
  .close {
    font-size: 2rem;
    margin: -1rem auto -1rem -1rem;
    color: #fff;
    opacity: 1;
    text-shadow: none;
    transition: .3s ease-in-out;
    &:hover {
      color: $active-link;
    }
  }
}
.modal-content {
  border: none;
  border-radius: 0;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
}
.modal-footer {
  display: none;
}
.tabs {
  width: 100%;
  .nav-pills {
    justify-content: center;
    border-radius: 0;
  }
  .nav-item {
    font-size: 0.625rem;
    a {
      color: $text-color;
    }
    .nav-link {
      border-radius: 0;
    }
  }
  .nav-pills .nav-link.active {
    color: $active-link;
    background-color: transparent;
    border-bottom: 1px solid $active-link;
  }
}
.modal-dialog {
  max-width: 100%;
  margin: 0 0 0 auto;
}
.modal-body {
  padding: 0 1rem 1rem 1rem;
}
@media (min-width: 768px) {
  .modal-dialog {
    max-width: 550px;
  }
}
@media (max-width: 435px) {
  .modal-body {
    padding: 0;
  }
}
</style>
