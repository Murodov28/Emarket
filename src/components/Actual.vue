<template>
  <section class="actual container">
    <div>
      <!-- <ul class="actual__list">
        <li v-for="item in items" :key="item.name">
          <ActualItem :item="item" />
        </li>
      </ul> -->
      <marquee behavior="scroll" direction="" scrollamount="17">
        <ul class="actual__list">
          <li v-for="item in items" :key="item.name">
            <ActualItem :item="item" />
          </li>
        </ul>
      </marquee>
    </div>
  </section>
</template>

<script>
import ActualItem from "./ActualItem.vue";
export default {
  components: { ActualItem },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped></style>
