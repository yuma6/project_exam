<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ count }}回ボタンがクリックされました！</p>
    <button @click="buttonClicked">ボタン</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
      return {
          count: 0,
      };
  },
  props: {
    msg: String,
  },
  methods: {
    buttonClicked() {
      this.count += 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

button {
  border-radius: 5px;
}
</style>