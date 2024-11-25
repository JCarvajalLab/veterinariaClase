
<template>
  <img alt="Tienda logo" src="./assets/logo.png" />
  <HomePage msg="Bienvenido a EduPets" />

  <!-- <div class="container">
  <img alt="Vue logo" src="./assets/logo.png">
    <div class="general">
      <ul class="nav" style="background-color: yellow;">
        <li class="nav-item">
          <router-link to="/home">Inicio</router-link>  
        </li>
        <li class="nav-item">
          <router-link to="/login">Personaje</router-link>  
        </li>
        <li class="nav-item">
          <router-link to="/registro">Personajes</router-link>  
        </li>
        <li class="nav-item">
          <router-link to="/proveedores">Contacto</router-link>  
        </li>
        <li class="nav-item">
          <router-link to="/proveedores">Contacto</router-link>  
        </li>
      </ul>
      <img :src="imageUrl" alt="Descripción de la imagen" />
      <router-view />
    </div>
  </div> -->
</template>

<script>
import HomePage from "./views/HomePage.vue";
 
export default {
  name: "App",
  components: {
    HomePage,
  },
};

</script>

<style>

</style>
