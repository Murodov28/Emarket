<template>
  <div>
    <Navbar />
    <Header />
    <Slider />
    <Actual :items="items" />
    <Location />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/Header.vue";
import Slider from "../components/Slider.vue";
import Actual from "../components/Actual.vue";
import Location from "../components/Location.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Actual, Navbar, Header, Slider, Location, Footer },
  props: {
    items: Array,
  },
};
</script>
