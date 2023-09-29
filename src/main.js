import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.css";
import "@/assets/scss/index.scss";
import "animate.css";
import VueGtm from "vue-gtm";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "G-QCVE085BGW", // 여러분의 Google Analytics 추적 ID로 교체하세요.
  router,
});
Vue.use(VueGtm, {
  id: "GTM-TLP29MTB", // GTM 컨테이너 ID를 입력하세요
  enabled: true,
  debug: true,
  vueRouter: router, // Vue Router 인스턴스, 필요하면
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
