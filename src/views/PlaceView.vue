<template>
  <div>
    <ItemComponent item_name="Місце у коворкінгу"
                   pic_name="place.png"
                   text_sm="Кількість днів"
                   text_lg="Кількість місяців"
                   :price_sm="2"
                   :price_lg="3000"
                   show_addit
    />
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";

export default {
  name: 'PlaceView',
  components: {
    ItemComponent,
  },
}
</script>