<template>
  <div>
    <Navbar />
    <KatalogComp
      @PushInKorzina="$emit('PushInKorzina', $event)"
      @filterP="$emit('filterP', $event)"
      :items="filterItems"
    />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import KatalogComp from "../components/KatalogComp.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, KatalogComp, Footer },
  props: {
    filterItems: Array,
  },
};
</script>

<style lang="scss" scoped></style>
