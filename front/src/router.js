import VueRouter from 'vue-router';
import App from '@/App';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/verification-profile',
      component: App
    },
    {
      path: "/",
      redirect: "/verification-profile"
    }
  ]
})