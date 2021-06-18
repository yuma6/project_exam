<template>
  <div id="app">
    <nav>
      <a @click='state = "hello"' href="#">Helloページへ</a> |
      <a @click='state = "info"' href="#">情報ページへ</a> |
      <a @click='state = "contact"' href="#">コンタクトページへ</a> |
      <a @click='state = "info_01"' href="#">自己紹介</a> |
      <a @click='state = "info_02"' href="#">好きな季節</a>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <main>
      <HelloWorld v-if='state === "hello"' msg="Welcome to Your Vue.js App" />
      <information v-if='state === "info"' />
      <Contact v-if='state === "contact"' />
      <info_page1 v-if='state === "info_01"' />
      <info_page2 v-if='state === "info_02"' />
    </main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Information from "./components/Information.vue";
import Contact from "./components/Contact.vue";
import info_page1 from "./components/info_page1.vue";
import info_page2 from"./components/info_page2.vue";

export default {
  name: "app",
  data: function() {
    return {
      state: "hello",
    };
  },
  components: {
    HelloWorld,
    Information,
    Contact,
    info_page1,
    info_page2,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
