<template>
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="serverDatas"
          >  
          </v-data-table>
            <div v-show="loading">
              <div class="fullview">
                <div class="loading-spacer"></div>
                <vue-loading 
                  type="spiningDubbles"
                  color="#aaa"
                  :size="{ width: '100px', height: '100px' }"
                  >
                </vue-loading>
              </div>
            </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
import axios from 'axios';

export default {
  components: {
    VueLoading
  },


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
      ],
      loading: true,

    }
  },

  mounted(){
    axios.get('https://wttr.in/Fukuoka?format=j1')
     //.then(function(res){console.log(res)}) //console.log確認用
        .then( res => {
          this.serverDatas = res.data.weather//res以降でデータの位置を指定。serverDatasへ送る
          this.loading = false
        })
        .catch( e => {
          console.log(e)
        })
        .finally(()=>{
          console.log("通信完了")
        })
  },
}

</script>

<style scoped>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: 30%;
}
</style>