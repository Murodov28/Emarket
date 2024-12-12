<template>
  <div>
    <Navbar />
    <AboutMeComp />
    <Location />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AboutMeComp from "../components/AboutMeComp.vue";
import Location from "../components/Location.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { AboutMeComp, Navbar, Location, Footer },
};
</script>

<style lang="scss" scoped></style>
