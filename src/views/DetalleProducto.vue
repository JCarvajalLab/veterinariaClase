<template>
    <div class="container">
      <router-link to="/Productos" class="btn btn-primary w-10">Volver a Lista de Productos</router-link>
      <div class="row">
        <div class="card">
          <div class="card-header alert alert-primary">
            Categoria: {{ product.category }}
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">Descripción: {{ product.description }}</p>
            <p class="card-text">Precio: {{ product.price }}</p>
            <p class="card-text">Stock: {{ product.stock }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
 
  <script>
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  export default {
   
    name: 'DetalleProducto',
    data() {
      return {
        product: [],
        imgLogo:'https://img.freepik.com/vector-gratis/logo-animal-perro-dibujado-mano_23-2148910632.jpg',
        imgFondo:'https://media.istockphoto.com/id/1417882544/es/foto/gran-grupo-de-gatos-y-perros-mirando-a-la-c%C3%A1mara-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=M_QTdfV5N9isysghP0VhE_y63omRrkUjwOvLIScbThE='
      }
  },
  methods:{
    DetalleProducto(i) {
      axios .get(`https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/products.json`)
        .then((resp) => {
          this.product = resp.data.products[i];
        });
    }
  },
  created() {
    const route = useRoute(); // Obtén la ruta actual
    const i = parseInt(route.params.id)
    this.DetalleProducto(i);
  }
}
 
  </script>
 
  <style scope>
 
 
</style>