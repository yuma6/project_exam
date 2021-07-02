<template>
  <v-data-table
    dense
    :headers="headers"
    :items="desserts"
    item-key="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import weathercall from '/WeatherCall.vue'
import weatherlist from '/WeatherList.vue'
export default {
  components: {
    weathercall,
    weatherlist,
  },
}
</script>
v-for