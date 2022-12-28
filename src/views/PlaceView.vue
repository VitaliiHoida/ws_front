<template>
  <div class="item_wrapper">
    <div class="pic_days">
      <div class="pic">
        <img src="@/assets/img/place.png" alt="Place in Space"/>
      </div>
      <div class="days">
        <div>
          <p>Кількість днів</p>
          <div v-if="days === 0" class="counter_1">
            <img src="@/assets/img/Plus.png" alt="meeting room" @click="addH()" />
          </div>
          <div class="counter" v-else>
            <img src="@/assets/img/Minus.png" alt="meeting room" @click="removeH()" />
            <p>{{days}}</p>
            <img src="@/assets/img/Plus.png" alt="meeting room" @click="addH()" />
          </div>
        </div>

        <div>
          <p>Кількість місяців</p>
          <div v-if="month === 0" class="counter_1">
            <img src="@/assets/img/Plus.png" alt="meeting room" @click="addD()" />
          </div>
          <div class="counter" v-else>
            <img src="@/assets/img/Minus.png" alt="meeting room" @click="removeD()" />
            <p>{{month}}</p>
            <img src="@/assets/img/Plus.png" alt="meeting room" @click="addD()" />
          </div>
        </div>
      </div>
    </div>
    <div class="additional">
      <label class="custom_check"><span>Додаткове обладнання</span>
        <input type="checkbox" class="check">
        <span class="checkmark"></span>
      </label>



      <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="add_pic">
        <g clip-path="url(#clip0_318_2329)">
          <path d="M7.5 20.4718V0.73043C7.5 0.569707 7.63031 0.439453 7.79098 0.439453H22.6777C22.8384 0.439453 22.9687 0.569766 22.9687 0.73043V29.2695C22.9687 29.4302 22.8384 29.5605 22.6777 29.5605H7.79098C7.63025 29.5605 7.5 29.4302 7.5 29.2695V20.4718Z" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.2352 18.614C15.8073 18.614 16.2711 18.1502 16.2711 17.5781C16.2711 17.006 15.8073 16.5422 15.2352 16.5422C14.663 16.5422 14.1992 17.006 14.1992 17.5781C14.1992 18.1502 14.663 18.614 15.2352 18.614Z" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.8541 3H10.8145" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.8939 3H14.8542" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.9335 3H18.8938" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1367 23H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1367 25.1094H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1367 27.2188H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip1_318_2329)">
          <path d="M63.3497 4.09155H43.0002" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.1219 4.09155H40.4395V24.9324H59.5246" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M62.6002 4.09155H69.5606V24.9324H58.8972" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M69.4995 21.2808H40.4995" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M54.0901 23.1125H55.9101" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M56.8201 24.9326H53.1799V27.7406H56.8201V24.9326Z" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60.4601 27.7404H49.5398V29.5605H60.4601V27.7404Z" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_318_2329">
            <rect width="30" height="30" fill="white"/>
          </clipPath>
          <clipPath id="clip1_318_2329">
            <rect width="30" height="30" fill="white" transform="translate(40)"/>
          </clipPath>
        </defs>
      </svg>

    </div>
    <div class="summary">
      <span>Загальна вартість:</span><span class="value">{{sum}}&nbsp;₴</span>
    </div>
    <input class="promo" type="text" placeholder="введіть промо код">
    <button class="buy" type="button">Оплатити</button>
  </div>
</template>

<script>
export default {
  name: 'RoomView',
  data() {
    return {
      days: 0,
      month: 0,
      sum: 0,
    }
  },
  methods: {
    addH() {
      this.days ++;
    },
    addD() {
      this.month ++;
    },
    removeH() {
      this.days --;
    },
    removeD() {
      this.month --;
    },
  },
}
</script>

<style scoped>
.item_wrapper {
  margin-top: 25px;
}

.pic_days {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 40px;
}

.pic_days > div {
  width: 50%;
}

.pic {
  padding: 15px;
}

.pic img {
  width: 100%;
}

.days {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
}

.days > div {
  text-align: center;
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

.additional {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.additional .check {
  box-sizing: border-box;
  height: 15px;
  width: 15px;
  margin: 0;
}

.additional span {
  font-size: 14px;
  line-height: 14px;
  color: #747474;
}


.add_pic path {
  stroke: #747474;
}

.summary {
  margin-top: 25px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
}

.summary .value {
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  margin-left: 10px;
}

.promo {
  box-sizing: border-box;
  border: 1px solid #E00822 !important;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  text-transform: lowercase;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
}

input.promo:focus-visible {
  border: 1px solid #E00822 !important;
  outline: none;
}

.buy {
  margin: 10px 0 30px 0;
  background: #E00822;
  border: 1px solid #E00822;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 0;
  text-transform: uppercase;
}

.promo,
.buy {
  width: 100%;
}




/* Customize the label (the container) */
.custom_check {
  display: block;
  position: relative;
  padding-left: 25px;

  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.custom_check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.custom_check:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.custom_check input:checked ~ .checkmark {
  background-color: #E00822;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.custom_check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.custom_check .checkmark:after {
  left: 3px;
  top: -1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


.custom_check input:checked ~ .add_pic path {
  stroke: var(--tg-theme-text-color);;
}
</style>