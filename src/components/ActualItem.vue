<template>
  <div class="actual__list-item">
    <div class="actual__list-item-img">
      <img :src="item.img" alt="" />
    </div>
    <div class="actual__list-item-about">
      <h3>{{ item.name }}</h3>
      <div class="actual__list-item-about-bot">
        <p>{{ item.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped></style>
