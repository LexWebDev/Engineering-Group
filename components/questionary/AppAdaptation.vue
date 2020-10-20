<template>
  <div>
    <b-row>
      <b-col cols="12">
        <div class="block-img">
          <b-img src="img/img-2.jpg" />
          <h1 class="section-title">
            «Адаптация»
          </h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="content-title">
          Точка входа
        </div>
        <p class="content">
          Проверьте Ваших <span class="accent-text">заказчиков</span> (ЛПР) и возможности нашей
          компании на предмет <span class="accent-text">соответствия</span>. Предоставьте им
          <span class="accent-text">презентации</span> и <span class="accent-text">референсы</span> компании,
          <span class="accent-text">запросите</span> технические требования,
          <span class="accent-text">допуски</span> необходимые для работ,
          <span class="accent-text">документы</span> для аккредитации.
        </p>
      </b-col>
      <b-col cols="12">
        <div class="content-title">
          Проектная документация
        </div>
        <p class="content">
          <span class="accent-text">Запросите</span> проектную документацию для выставления КП.
          «Engineering Group» <span class="accent-text">предоставит</span> пакет всех необходимых документов
          <span class="accent-text">по запросу</span> и <span class="accent-text">выставит</span>
          коммерческое предложение. Сможем понять <span class="accent-text">соответствует</span> ли предложение
          компании <span class="accent-text">техническим</span>
          и <span class="accent-text">ценовым</span> требованиям Вашего <span class="accent-text">заказчика</span>.
        </p>
      </b-col>
      <b-col cols="12">
        <div class="content-title">
          Оформление в штат
        </div>
        <p class="content">
          При <span class="accent-text">положительном</span> подтверждении заказчиков или переходе к стадии
          <span class="accent-text">подписания</span> контрактов период <span class="accent-text">«Адаптации»</span>
          считается <span class="accent-text">пройденным</span> происходит
          <span class="accent-text">оформление</span> в штат.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AppAdaptation'
}
</script>

<style lang="scss" scoped>
.content-title {
  margin-top: 30px;
  color: #181818
}
.content {
  color: rgba(#181818, .6);
  font-weight: 400;
  font-size: 1rem;
  .accent-text {
    color: #181818;
  }
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
    color: #fff;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    line-height: 1;
    background-color: rgba(#000, .79);
    margin-bottom: 0;
  }
}
@media (max-width: 410px) {
  .block-img {
    .section-title {
      font-size: 1.5rem;
    }
  }
}
</style>
