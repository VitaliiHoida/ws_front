<template>
      <div class="items_wrap">

        <div class="item">
          <img src="@/assets/img/place.png" alt="place in space" />
          <p>Місце в коворкінгу</p>
          <router-link class="button" :to="{name: 'place'}">Обрати</router-link>
        </div>

        <div class="item">
          <img src="@/assets/img/room.png" alt="meeting room" />
          <p>Переговорна кімната</p>
          <router-link class="button" :to="{name: 'room'}">Обрати</router-link>
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
.items_wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 50px 0;
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
  margin-top: 40px;
  margin-bottom: 20px;
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
</style>
