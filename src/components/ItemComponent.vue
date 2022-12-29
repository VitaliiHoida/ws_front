<template>
  <div class="item_wrapper">
    <div class="pic_days">
      <div class="pic">
        <img :src="require(`@/assets/img/${pic_name}`)" :alt="item_name"/>
      </div>
      <div class="days">
        <div>
          <p>{{ text_sm }}</p>
          <CounterComponent :value="sm"
                            @add="addSm()"
                            @remove="removeSm()"
          />
        </div>

        <div>
          <p>{{ text_lg }}</p>
          <CounterComponent :value="lg"
                            @add="addLg()"
                            @remove="removeLg()"
          />
        </div>
      </div>
    </div>

    <label class="custom_check" v-show="show_addit">
      <input type="checkbox" class="check" v-model="addit">
      <span class="text">Додаткове обладнання:</span>
      <span class="checkmark"></span>
      <svg width="70" height="30" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="add_pic">
        <g clip-path="url(#clip0_318_2329)">
          <path
              d="M7.5 20.4718V0.73043C7.5 0.569707 7.63031 0.439453 7.79098 0.439453H22.6777C22.8384 0.439453 22.9687 0.569766 22.9687 0.73043V29.2695C22.9687 29.4302 22.8384 29.5605 22.6777 29.5605H7.79098C7.63025 29.5605 7.5 29.4302 7.5 29.2695V20.4718Z"
              stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path
              d="M15.2352 18.614C15.8073 18.614 16.2711 18.1502 16.2711 17.5781C16.2711 17.006 15.8073 16.5422 15.2352 16.5422C14.663 16.5422 14.1992 17.006 14.1992 17.5781C14.1992 18.1502 14.663 18.614 15.2352 18.614Z"
              stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.8541 3H10.8145" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.8939 3H14.8542" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.9335 3H18.8938" stroke="" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1367 23H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M10.1367 25.1094H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M10.1367 27.2188H19.8633" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
        </g>
        <g clip-path="url(#clip1_318_2329)">
          <path d="M63.3497 4.09155H43.0002" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M43.1219 4.09155H40.4395V24.9324H59.5246" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M62.6002 4.09155H69.5606V24.9324H58.8972" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M69.4995 21.2808H40.4995" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M54.0901 23.1125H55.9101" stroke="" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M56.8201 24.9326H53.1799V27.7406H56.8201V24.9326Z" stroke="" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60.4601 27.7404H49.5398V29.5605H60.4601V27.7404Z" stroke="" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round"/>
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
    </label>

    <div class="summary">
      <span>Загальна вартість:</span><span class="value">{{ sum }}&nbsp;₴</span>
    </div>
    <input class="promo" type="text" placeholder="введіть промо код" v-model="promo">
    <button class="buy" type="button" @click="makeOrder()">Оплатити</button>
  </div>
</template>

<script>
import CounterComponent from "@/components/CounterComponent.vue";
import {useTelegram} from "@/helpers/useTelegram";
import axios from "axios";

export default {
  name: 'ItemComponent',
  components: {
    CounterComponent,
  },
  props: {
    pic_name: {
      type: String,
      required: true,
    },
    text_sm: {
      type: String,
      required: true,
    },
    text_lg: {
      type: String,
      required: true,
    },
    price_sm: {
      type: Number,
      required: true,
    },
    price_lg: {
      type: Number,
      required: true,
    },
    item_name: {
      type: String,
      required: true,
    },
    show_addit: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      sm: 0,
      lg: 0,
      addit: false,
      promo: '',
    }
  },
  computed: {
    sum () {
      if (this.sm > 0 || this.lg > 0) {
        if (this.addit) {
          let res = (this.sm  * (this.price_sm + 100)) + (this.lg  * (this.price_lg + 1000))
          this.promo === 'webnauts.pro' ? res = res * 0.5 : res;
          return res
        } else {
          let res = (this.sm * this.price_sm) + (this.lg * this.price_lg)
          this.promo === 'webnauts.pro' ? res = res * 0.5 : res;
          return res
        }
      } else {
        return 0;
      }
    }
  },
  methods: {
    addSm() {
      this.sm++;
    },
    addLg() {
      this.lg++;
    },
    removeSm() {
      this.sm--;
    },
    removeLg() {
      this.lg--;
    },
    makeOrder() {
      const {tg, queryId, user, chatId} = useTelegram();
      let order = {};
      order.user_name = user.first_name + ' ' + user.last_name;
      order.sum_to_pay = this.sum;
      order.name = this.item_name;
      order.text_sm = this.text_sm;
      order.text_lg = this.text_lg;
      order.sm = this.sm;
      order.lg = this.lg;
      order.addit = this.addit;

      tg.MainButton.setParams({
        text: 'Сплатити ' + order.sum_to_pay + ' грн.',
        color: '#217C2F',
      });

      tg.MainButton.show();

      const mainButtonHandler = function () {

        const data = {
          order,
          queryId,
          chatId
        };

        axios.post('https://wabot.back.staj.fun/web-data', data, {headers: {'Content-Type': 'application/json'}}).then(
            (response) => {
              tg.openInvoice(response.data, function (status) {
                if (status == 'paid') {
                  tg.close();
                } else if (status == 'failed') {
                  tg.HapticFeedback.notificationOccurred('error');
                  //Cafe.showStatus('Payment has been failed.');
                } else {
                  tg.HapticFeedback.notificationOccurred('warning');
                }
              });
            }
        );


        tg.MainButton.hide();

        tg.offEvent('mainButtonClicked', mainButtonHandler);
      };

      tg.onEvent('mainButtonClicked', mainButtonHandler);
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

.text {
  font-size: 14px;
  line-height: 14px;
  color: #747474;
}

.add_pic {
  margin-left: 10px;
}

.add_pic path {
  stroke: #747474;
}

.custom_check {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.custom_check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 7px;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #eee;
  border-radius: 4px;
}

.custom_check:hover input ~ .checkmark {
  background-color: #ccc;
}

.custom_check input:checked ~ .checkmark {
  background-color: #E00822;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom_check input:checked ~ .checkmark:after {
  display: block;
}

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
  stroke: var(--tg-theme-text-color);
}

.custom_check input:checked ~ span.text {
  color: var(--tg-theme-text-color);
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

.buy:hover {
  cursor: pointer;
}

.promo,
.buy {
  width: 100%;
}
</style>