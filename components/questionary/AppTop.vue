<template>
  <div>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8">
        <b-card
          class="top-block-questionary"
          overlay
          :img-src="imgLink"
          text-variant="white"
          :title="title"
          :sub-title="subtitle"
        >
          <b-card-text
            v-if="cardText"
            v-html="cardText"
          />
          <b-btn
            v-if="btnText"
            ref="btnShow"
            variant="secondary"
            @click="showModal"
            v-text="btnText"
          />
        </b-card>
      </b-col>
    </b-row>
    <app-modal />
  </div>
</template>

<script>
import AppModal from '@/components/info/AppModal'
export default {
  name: 'AppTop',
  components: { AppModal },
  props: {
    imgLink: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    cardText: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  data: () => ({
  }),
  methods: {
    showModal () {
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: transparent;
  border: none;
}
.card-img-overlay {
  padding: 3rem;
}
.top-block-questionary {
  text-align: center;
  .card-img {
    max-height: 240px;
  }
  .card-title {
    margin-bottom: 0.3125rem;
    font-size: 1.5rem;
  }
  .card-subtitle {
    font-size: 1.125rem;
    font-weight: 300;
  }
  .text-muted {
    color: rgba(#fff, .6) !important;
  }
  .card-text {
    font-style: italic;
    font-size: 1rem;
    color: rgba(#fff, .8);
    margin-top: 15px;
  }
  .btn {
    font-family: Roboto, sans-serif;
    line-height: 1;
    border-radius: 8px;
    padding: 10px 35px;
    font-weight: 400;
  }
}
@media (max-width: 500px) {
  .card-img-overlay {
    padding: 0.7rem;
  }
  .top-block-questionary {
    .card-title {
      font-size: 1.1rem;
    }
    .card-subtitle {
      font-size: 1rem;
    }
    .card-text {
      font-size: 0.8rem;
    }
  }
}
@media (max-width: 430px) {
  .top-block-questionary {
    .card-text {
      margin-top: 0;
      margin-bottom: 10px;
    }
    .btn {
      font-size: 11px;
    }
  }
}
@media (max-width: 360px) {
  .card-img-overlay {
    padding: 0.2rem;
  }
  .top-block-questionary {
    .card-title {
      font-size: 1rem;
    }
    .card-subtitle {
      font-size: 0.8rem;
    }
    .card-text {
      line-height: 1;
      font-size: 0.7rem;
    }
    .btn {
      padding: 7px 27px
    }
  }
}
</style>
