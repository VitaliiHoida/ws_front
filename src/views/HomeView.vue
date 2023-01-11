<template>
  <div class="main">
      <div class="items_wrap">

        <div class="item">
          <img src="@/assets/img/place.png" alt="place in space" />
          <p>Місце в коворкінгу</p>
          <div class="price_info">
          <div  class="price">400 грн/день <span>*</span></div>
          <div class="price">3000 грн/міс <span>*</span></div>
          </div>
          <router-link class="button" :to="{name: 'place'}">Обрати</router-link>
        </div>

        <div class="item">
          <img src="@/assets/img/room.png" alt="meeting room" />
          <p>Переговорна кімната</p>
          <div class="price_info">
          <div class="price">200 грн/год</div>
          <div class="price">1600 грн/день</div>
          </div>
          <router-link class="button" :to="{name: 'room'}">Обрати</router-link>
        </div>

      </div>
    <div style="width: 100%" class="price_info">
      <p class="price">
        <span>*</span> - Вартість без додаткового обладнання</p>
      <p class="price">Додаткове обладнання:</p>
      <ul class="price">
        <li>100 грн/день</li>
        <li>1000 грн/міс</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.main {
  padding-bottom: 20px;
}
.items_wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 25px 0 40px 0;
}

.items_wrap .item {
  width: 49%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.items_wrap .item img {
  width: 100%;
}

.items_wrap .item p{
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.items_wrap .item .button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #E00822;
  border: 1px solid #E00822;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
}

.price {
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #747474;
  margin: 2px 0;
}

.price span {
  color: #E00822;
}

.price_info {
  margin: 5px 0;
}
</style>
