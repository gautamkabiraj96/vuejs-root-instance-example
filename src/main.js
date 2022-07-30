import Vue from "vue";
import App from "./App.vue";
import constants from "./constants";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  data() {
    return {
      appName: "Night"
    };
  },
  created() {
    this.constants = constants;
  }
}).$mount("#app");
