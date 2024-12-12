<template>
  <div>
    <Navbar />
    <KorzinaList
      @basket__Plus="$emit('basket__Plus', $event)"
      @basket__Minus="$emit('basket__Minus', $event)"
      :korzinaItemsPros="korzinaItemsPros"
    />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import KorzinaList from "../components/KorzinaList.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, KorzinaList, Footer },
  props: {
    korzinaItemsPros: Array,
  },
};
</script>

<style lang="scss" scoped></style>
