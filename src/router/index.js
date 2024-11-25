import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas
import Home from "../views/HomePage.vue";
import Login from "../views/LoginUsuario.vue";
import Registro from "../views/Registro.vue";
import Proveedores from "../views/Proveedores.vue";
import Productos from "../views/ProductosVarios.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/login", name: "login", component: Login },
    { path: "/registro", name: "registro", component: Registro },
    { path: "/proveedores", name: "proveedores", component: Proveedores, meta: { requiresAuth: true } },
    { path: "/productos", name: "productos", component: Productos, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Redirección si no está autenticado
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token"); // Simulación de autenticación
    if (to.meta.requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;