import Vue from 'vue';
import VueRouter from 'vue-router';
import QRScan from '../views/QRScan.vue';
import QRDisplay from '../views/QRDisplay.vue';
import Auth from '../views/Auth.vue';
import News from '../views/News.vue';
import Alert from '../views/Alert.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'QRDisplay',
    component: QRDisplay,
  },
  {
    path: '/scan/',
    name: 'QRScan',
    component: QRScan,
  },
  {
    path: '/auth/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/news/',
    name: 'News',
    component: News,
  },
  {
    path: '/alerts/',
    name: 'Alert',
    component: Alert,
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
