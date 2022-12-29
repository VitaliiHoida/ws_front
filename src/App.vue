<template>
  <div class="wrapper">
    <div class="container">
      <div class="fw">
        <div class="header">
          <div class="back_container">
            <router-link :to="{name: 'home'}" title="На головну"><img src="@/assets/img/back.png" alt="back" v-if="$route.path !== '/'"/></router-link>
          </div>
          <div class="img_container">
            <img src="@/assets/img/Logo_light.png" alt="Webnauts Space" v-if="them !== 'dark'"/>
            <img src="@/assets/img/Logo_dark.png" alt="Webnauts Space" v-else/>
          </div>
          <div class="support_container">
            <a href="https://t.me/t_khimich" title="Написати адміністратору"><img src="@/assets/img/support.png" alt="support"/></a>
          </div>
        </div>
      </div>
      <router-view/>
      <hr>
      <div class="contacts">
        <div class="phones">
          <ul>
            <li>м.Кривий Ріг,</li>
            <li>вул. Соборності, буд. 23</li>
            <li><a href="mailto:info@webnauts.academy">info@webnauts.academy</a></li>
          </ul>
        </div>
        <div class="phones">
          <ul>
            <li><a href="oferta.pdf" download class="decor">Публічна оферта</a></li>
            <li><a href="tel:+380984775490">+380984775490</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      them: ''
    }
  },
  created() {
    this.them = window.Telegram.WebApp.colorScheme;
  }
}
</script>

<style>
@font-face {
  font-family: 'Neue Machina';
  src: url('~@/assets/fonts/Neue Machina/PPNeueMachina-PlainRegular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Neue Machina';
  src: url('~@/assets/fonts/Neue Machina/PPNeueMachina-PlainUltrabold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

* {
  font-family: "Neue Machina", sans-serif;
}

body {
  background-color: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  margin: 0;
}

.wrapper {
  margin: 0 auto;
  max-width: 380px;
  width: 100%;
}

.container {
  padding: 30px 15px 10px 15px;
  width: calc(100% - 30px);
  max-width: 370px;
}

.fw {
  width: calc(100% + 30px);
  margin-left: -15px;
  display: flex;
  justify-content: center;

}

.header {
  display: flex;
  width: calc(100% - 30px);
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.header .back_container {
  width: 40px;
}

.contacts {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
}

.contacts a{
  text-decoration: none;
  color: #747474;
}

.phones ul{
  list-style: none;
  margin:0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #747474;
}

.phones ul li:not(:last-of-type){
  padding-bottom: 5px;
}

.phones ul li .decor{
  text-decoration: underline;
  opacity: 1;
  color: var(--tg-theme-text-color);
}
</style>
