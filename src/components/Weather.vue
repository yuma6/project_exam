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
// import Vue from 'vue'
const axios = require('axios');
// new Vue({
//   //el: '#app',
  // data () {
  //   return {
  //     info: []
  //   }
  // },

// });

  export default {
    data: () => ({
      desserts: [//この中にaxiosから取得したデータを入れていた。入力しているデータは上書きされる
        {
          name: 1,
          calories: 1,
          fat: 1,
          carbs: 1,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
      ],
      headers: [//axiosで取得したデータがitemsに入るdessertsにある時、そのデータからvalueで指定出来る
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
    }),
    mounted () {
      let self = this
      axios.get('http://wttr.in/Fukuoka?format=j1')
      .then(function(response){(self.info = response)})//data内の配列へ、そこから5行目へ//response.data.weather等で位置を指定
      //.then(function(response){(self.desserts = response.data.weather)})//多分こう
      //.then(function(res){console.log(res)})
      .then(function(){console.log(self.info)})
    }
    
  }
</script>