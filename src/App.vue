<template>
  <div>
    <router-view
      @filterP="filterP($event)"
      :items="items"
      :filterItems="filterItems"
      :korzinaItemsPros="korzinaItems"
      @PushInKorzina="katalogPushInKorzina($event)"
      @basket__Plus="basket__PlusFu($event)"
      @basket__Minus="basket__MinusFu($event)"
    />
    <!-- <Home :items="items" /> -->
  </div>
</template>

<script>
import tavar1 from "../src/assets/img/tovar (1).png";
import tavar2 from "../src/assets/img/tovar (2).png";
import Home from "./views/Home.vue";
export default {
  components: { Home },
  data() {
    return {
      items: [
        {
          index: 1,
          name: "Плащь",
          price: 5551,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 2,
          name: "куртка",
          price: 4551,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
        {
          index: 3,
          name: "кофта",
          price: 3451,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
        {
          index: 4,
          name: "комбинезон",
          price: 7561,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 5,
          name: "кепка",
          price: 2451,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 6,
          name: "сумка",
          price: 4551,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
      ],
      filterItems: [
        {
          index: 1,
          name: "Плащь",
          price: 5551,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 2,
          name: "куртка",
          price: 4551,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
        {
          index: 3,
          name: "кофта",
          price: 3451,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
        {
          index: 4,
          name: "комбинезон",
          price: 7561,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 5,
          name: "кепка",
          price: 2451,
          totalPrice: 0,
          img: tavar1,
          count: 1,
        },
        {
          index: 6,
          name: "сумка",
          price: 4551,
          totalPrice: 0,
          img: tavar2,
          count: 1,
        },
      ],
      korzinaItems: [],
    };
  },
  methods: {
    filterP(name) {
      if (true) {
        this.filterItems = this.items.filter(
          (item) => item.name.toLowerCase() == name.toLowerCase()
        );
      }
    },
    katalogPushInKorzina(i) {
      let isProduct = false;
      this.items.map((item) => {
        if (this.korzinaItems.length) {
          this.korzinaItems.map((itemK) => {
            if (i == itemK.index) {
              isProduct = true;
              item.count++;
            }
          });
          if (!isProduct && item.index == i) {
            this.korzinaItems.push(item);
            isProduct = false;
            item.count = 1;
          }
        } else if (item.index == i) {
          this.korzinaItems.push(item);
          item.count = 1;
          isProduct = false;
        }
      });
    },
    basket__PlusFu(name) {
      this.korzinaItems.map((item) => {
        if (item.name == name) {
          item.count++;
        }
      });
    },
    basket__MinusFu(name) {
      this.korzinaItems.map((item) => {
        if (item.name == name) {
          if (item.count == 0) {
            this.korzinaItems.splice(item, 1);
          } else {
            item.count--;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
