import { createRouter, createWebHistory } from "vue-router";


import LoginUsuario from '@/views/LoginUsuario.vue';
import HomePage from '@/views/HomePage.vue';
import RegistroUsuario from '@/views/RegistroUsuario.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: '/login', name: 'Login', component: LoginUsuario},
  { path: '/home', name: 'Home', component: HomePage},
  { path: '/registro', name: 'Registro', component: RegistroUsuario},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;