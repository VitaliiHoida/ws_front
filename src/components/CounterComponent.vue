<template>
  <div v-if="value === 0" class="counter_1">
    <img src="@/assets/img/Plus.png" alt="meeting room" @click="addD()" />
  </div>
  <div v-else class="counter">
    <img src="@/assets/img/Minus.png" alt="meeting room" @click="removeD()" />
    <p>{{value}}</p>
    <img src="@/assets/img/Plus.png" alt="meeting room" @click="addD()" />
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  emits: ['add', 'remove'],
  props: {
    value: {
      type: Number,
      required: true,
    }
  },
  methods:{
    removeD(){
      this.$emit('remove')
    },
    addD(){
      this.$emit('add')
    },
  },
}
</script>

<style scoped>
img:hover {
  cursor: pointer;
}

.counter_1 {
  height: 40px;
}

.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.counter p {
  font-size: 18px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
</style>