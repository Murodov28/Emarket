<template>
  <header class="header container">
    <div class="header__top">
      <img src="../assets/img/logo.png" alt="" />
      <h1>Одежда для каждого</h1>
      <p>на каждый день</p>
    </div>
    <div class="header__bottom">
      <router-link to="/Katalog">
        <button>
          <img src="../assets/img/catalog-icon.png" alt="" />
          <span>Каталог</span>
        </button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
