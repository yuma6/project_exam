<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-data-table
          :headers="headers"
          :items="serverDatas"
        >
        </v-data-table>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';

export default {

  data(){
    return {
      headers: [
          {
            text: '日付',
            value: 'date'//ここで指定する。そのデータをitemsから受け取って表示
          },
           {
            text: '平均気温(℃)',
            value: 'avgtempC'
          },
           {
            text: '最高気温(℃)',
            value: 'maxtempC'
          },
           {
            text: '最低気温(℃)',
            value: 'mintempC'
          },
        ],
      serverDatas:[
        //これの中身を7が受け取る
      ],



    }
  },

  mounted(){
    axios.get('http://wttr.in/Fukuoka?format=j1')
     //.then(function(res){console.log(res)}) //console.log確認用
        .then( res => {
          this.serverDatas = res.data.weather//res以降でデータの位置を指定。41-43へ送る
        })
        .catch( e => {
          console.log(e)
        })
        .finally(()=>{
          console.log("通信完了")
        })
  }

}
</script>