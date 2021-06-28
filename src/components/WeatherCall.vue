<script>
import Api from "./WeatherGet.vue"

export default {
  name: "Component",
  components: { Api },
  data() {
    return {
      info: ""
    }
  },
  methods: {
    setInfo: function(info){
      this.info = info
    },
    callApi(url){
      Api.callApi(url, this.setInfo)
    }
  },
  mounted() {
    this.callApi("http://wttr.in/Fukuoka?format=j1")
  }
};
</script>