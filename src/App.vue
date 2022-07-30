<template>
  <div id="app">
    <h2>Hello {{ rootName }}!</h2>
    <p>App description: {{ constants["appDescription"] }}</p>
    <p>App author: {{ constants["appAuthor"] }}</p>
    <p>App verion: {{ constants["appVersion"] }}</p>
    <small>wwww.nightprogrammer.com</small>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    rootName() {
      return this.$root.appName;
    },
    constants() {
      return this.$root.constants;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>