import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Cadastro from '../components/Cadastro.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/cadastro', component: Cadastro },
];

const router = new VueRouter({
  routes,
});

export default router;