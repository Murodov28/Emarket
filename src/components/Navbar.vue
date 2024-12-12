<template>
  <nav class="container navbar">
    <router-link to="/emarket" class="navbar__logo"
      ><img src="../assets/img/logo.png" alt=""
    /></router-link>
    <div
      :class="isBurgerShow ? 'navbar__navigation active' : 'navbar__navigation'"
    >
      <div class="navbar__navigation-left">
        <ul>
          <li><router-link to="/emarket">Главная</router-link></li>
          <li><router-link to="/emarket/Katalog">коллекции</router-link></li>
          <li><<router-link to="/emarket/AboutMe">О нас</router-link></li>
          <li><router-link to="/emarket/Contact">контакты</router-link></li>
          <li><<router-link to="/emarket/Korzina">корзина</router-link></li>
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
