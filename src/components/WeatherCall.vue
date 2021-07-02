<script>
import axios from "axios"
export default {
    data () {
          return {
            info: null
        }
    },
    mounted () {
      let self = this
      axios.get('http://wttr.in/Fukuoka?format=j1')
      .then(function(response){(self.info = response)})
      // .then(function(res){console.log(res)})
      // .then(function(){console.log(self.info)})
    }
}
</script>