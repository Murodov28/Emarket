<template>
  <section class="catalog container">
    <div :class="isCatalogShow ? 'catalog__sort active' : 'catalog__sort'">
      <ul>
        <li><button @click="$emit('filterP', 'куртка')">куртки</button></li>
        <li><button @click="$emit('filterP', 'Плащь')">Плащи</button></li>
        <li><button @click="$emit('filterP', 'кофта')">кофты</button></li>
        <li>
          <button @click="$emit('filterP', 'комбинезон')">комбинезоны</button>
        </li>
        <li><button @click="$emit('filterP', 'кепка')">кепки</button></li>
        <li><button @click="$emit('filterP', 'сумка')">сумки</button></li>
      </ul>
    </div>
    <button @click="isCatalogShow = !isCatalogShow" class="catalog-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="catalog__list">
      <div v-for="item in items" :key="item.name" class="catalog__list-card">
        <div class="catalog__list-card-img">
          <img :src="item.img" alt="" />
        </div>
        <div class="catalog__list-card-about">
          <h3>{{ item.name }}</h3>
          <div class="catalog__list-card-about-bot">
            <p>{{ item.price }} ₽</p>
            <button @click="$emit('PushInKorzina', item.index)">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {
      isCatalogShow: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
