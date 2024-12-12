<template>
  <div>
    <Navbar />
    <Location class="location__contact" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Location from "../components/Location.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Navbar, Location, Footer },
};
</script>

<style lang="scss" scoped></style>
