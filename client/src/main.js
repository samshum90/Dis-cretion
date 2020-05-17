import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export const eventBus = new Vue();
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
