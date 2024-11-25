<template>
      <div class="container">
      <div class="row">
        <div
          class="card"
          v-for="(product, index) in products"
          :key="index" @click="DetalleProducto(index)">
          <div class="card-header alert alert-primary">
            Categoria: {{ product.category }}
          </div>
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios';
   
   
  export default {
    name: 'ListaProductos',
    data() {
      return {
        products: []
      };
    },
    methods: {
      obtenerDatos() {
        axios
          .get(
            `https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/products.json`
          )
          .then((resp) => {
            this.products = resp.data.products;
          });
      },
      DetalleProducto(id) {
        // Navega a la página de detalle del producto
        this.$router.push(`/Productos/${id}`);
      }
    },
    created() {
      this.obtenerDatos();
    }
  };
</script>

<style>
      .card{
          max-width: 300px;
          margin: 10px;
          padding: 20px;
          border: 2px solid gray;
          border-radius: 15px;
          background-color: #f2f2f2;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          font-family: Arial, sans-serif;
         
      }
     
      .card img{
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          width: 100%;
          height: 70%;
          display: block;
          margin: 10px auto;
      }
     
     
     
      .button-container {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         margin-top: 15px;
         
      }
   
      .opinion {
      text-decoration: none;
      color: black;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      border: solid grey 1px;
          border-radius: 6px;
          background-color: lightgray;
  }
     
      .card-info {
         
         
          margin-top: 15px;
          font-size: 0.9rem;
         
          display: flex;
          justify-content: flex-start;
      }
     
      ul {
         width: 100%;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
      }
     
     
      .card-info li{
          text-align: left;
          padding: 10px;
          color: grey;
          border-bottom: 1px solid #ccc;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          background: #fff;
          padding: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
           
      }
     
      .fa-heart{
        margin-top: 10px;
        margin-right: 10px;
          color: red;
          scale: 1.6;
      }
     
     
      .button-container .opinion:hover{
          background-color: lightslategray;
      }
</style>