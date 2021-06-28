<script>
import axios from "axios"

function callApi(url, callback) {
  console.log()
  axios
    .get(url, { /*オプションがあれば書く*/ })
    .then(response => {
      callback(response)
    })
    .catch(e => {
      console.log("Error occurred in API")
      console.log(e)
    });
}

export default {callFreadApi}
</script>