<template>
  <nav class="container navbar">
    <a class="navbar__logo" href="#!"
      ><img src="../assets/img/logo.png" alt=""
    /></a>
    <div
      :class="isBurgerShow ? 'navbar__navigation active' : 'navbar__navigation'"
    >
      <div class="navbar__navigation-left">
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/Katalog">коллекции</router-link></li>
          <li><<router-link to="/AboutMe">О нас</router-link></li>
          <li><router-link to="/Contact">контакты</router-link></li>
          <li><<router-link to="/Korzina">корзина</router-link></li>
        </ul>
      </div>
      <div class="navbar__right">
        <a href="#!"><img src="../assets/img/icon1 (2).png" alt="" /></a>
        <a href="#!"><img src="../assets/img/icon1 (1).png" alt="" /></a>
        <a href="#!"><img src="../assets/img/icon1 (3).png" alt="" /></a>
      </div>
    </div>
    <button class="navbar__burger" @click="isBurgerShow = !isBurgerShow">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isBurgerShow: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
