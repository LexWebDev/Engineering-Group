<template>
  <b-container class="pt-4 pb-4">
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <div class="block-img">
              <b-img src="/img/img-4.jpg" />
              <h1 class="section-title">
                «Материалы»
              </h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div class="content-title">
              Маркетинговые материалы
            </div>
            <p class="content">
              Все <span class="accent-text">необходимые</span> документы, презентации и
              прочие <span class="accent-text">материалы</span> для <span class="accent-text">коммерческих</span> целей
              Вы можете скачать по кнопке ниже.
            </p>
          </b-col>
          <b-col cols="12" class="mt-4">
            <b-btn
              variant="primary"
              class="info-btn"
            >
              Скачать материалы
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AppMaterials'
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
