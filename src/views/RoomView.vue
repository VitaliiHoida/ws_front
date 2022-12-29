<template>
  <div>
    <ItemComponent item_name="Місце у переговорній"
                   pic_name="room.png"
                   text_sm="Кількість годин"
                   text_lg="Кількість днів"
                   :price_sm="200"
                   :price_lg="1600"
    />
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";

export default {
  name: 'RoomView',
  components: {
    ItemComponent,
  },
}
</script>