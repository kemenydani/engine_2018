import 'vuetify/dist/vuetify.css';

import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import App from './App.vue';

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(VeeValidate);
Vue.use(VueAxios, axios);

import ROUTES from './routes'

//axios.defaults.baseURL = 'http://php_app/api/';

new Vue({
  el: '#app',
  router: new Router({
    routes: ROUTES
  }),
  render: h => h(App)
});
