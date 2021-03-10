import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import { router } from './router'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
