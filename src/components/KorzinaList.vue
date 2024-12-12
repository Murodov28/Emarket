<template>
  <section class="korzina container">
    <div class="korzina__right">
      <div class="korzina__right-card" v-for="item in korzinaItemsPros">
        <img :src="item.img" alt="" />
        <div class="korzina__right-card-about">
          <h3>{{ item.name }}</h3>
          <div class="korzina__right-card-about-bottom">
            <div class="korzina__right-card-about-bottom-count">
              <p>кол-во:</p>
              <button @click="$emit('basket__Minus', item.name)">-</button>
              <span>{{ item.count }}</span>
              <button @click="$emit('basket__Plus', item.name)">+</button>
            </div>
            <p>стоимость: {{ item.price }} ₽</p>
          </div>
        </div>
      </div>
    </div>
    <div class="korzina__left">
      <div class="korzina__left-delivery">
        <p>доставка:</p>
        <p>500 ₽</p>
      </div>
      <div class="korzina__left-total">
        <p>Итого:</p>
        <p>{{ totalPriceFu }} ₽</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    korzinaItemsPros: Array,
  },
  data() {
    return {
      korzinaItemsKop: this.korzinaItemsPros,
      allPrice: 0,
    };
  },
  computed: {
    totalPriceFu() {
      this.allPrice = 0;
      this.korzinaItemsKop.map((item) => {
        if (this.korzinaItemsKop.length > 0) {
          item.totalPrice = item.count * item.price;
          this.allPrice += item.totalPrice;
        }
      });
      return this.allPrice + 500;
    },
  },
};
</script>

<style lang="scss" scoped></style>
