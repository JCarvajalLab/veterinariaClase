<template>
    <div class="general" :style="{ backgroundImage: 'url(' + imageFondo + ')' }">
      <div class="container">
        <img class="imageLogo" :src="imageLogo" alt="logo">
        <div>
          <h2>{{ generalInfo.name }}</h2>
          <p>{{ generalInfo.description }}</p>
        </div>
      </div>
      <div>
        <div class="cont-proveedor">
          <div class="proveedor">
            <h3>Proveedores</h3>
            <div class="table-proveedor">
              <table>
                <thead>
                  <tr class="card-header alert alert-primary">
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Telefono</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr class="card-proveedor" v-for="provider in providers" :key="provider.name">
                      <td>{{ provider.name }}</td>
                      <td>{{ provider.contactInfo.email }}</td>
                      <td>{{ provider.contactInfo.phone }}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <button id="btn-proveer-register" class="btn btn-primary btn-block mb-4">Registrar Proveedor</button>
          </div>
        </div>
      </div>
      <div class="cont-laboratorio">
        <h3>Laboratorios</h3>
        <div class="lab-list">
          <div class="card  " v-for="(laboratory, index) in laboratories" :key="index">
            <div class="card-header alert alert-primary">{{ laboratory.name }}</div>
              <div class="card-body">
                <h3 class="card-title">{{ laboratory.contactInfo.phone }} {{ laboratory.contactInfo.email }}</h3>
                <p v-for="(service, index) in laboratory.services" :key="index">{{ service }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
 
<script>
  import axios from 'axios'
  export default {
    name: 'HomePage',
    data() {
      return {
        imageFondo:'https://media.istockphoto.com/id/1417882544/es/foto/gran-grupo-de-gatos-y-perros-mirando-a-la-c%C3%A1mara-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=M_QTdfV5N9isysghP0VhE_y63omRrkUjwOvLIScbThE=',
        imageLogo:'https://img.freepik.com/vector-gratis/logo-animal-perro-dibujado-mano_23-2148910632.jpg',
        generalInfo: {},
        providers: [],
        laboratories: [],
 
      };
    },
    mounted() {
      axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/home.json')
        .then(resp => {
          this.generalInfo = resp.data.home.generalInfo;
          this.providers = resp.data.home.providers;
          this.laboratories = resp.data.home.laboratories;
        })
        .catch(error => {
        console.error('Error al obtener los datos:', error);
        });
      },
    }
</script>
 
<style scoped>
.general{
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  overflow:auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.container {
  background-color:rgb(64, 147, 150, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 20px;
  padding: 25px;
  margin-top: 25px;
}
.imageLogo {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
.cont-proveedor{
  background-color:rgb(64, 147, 150, 0.7);
  border: 1px solid black;
  border-radius:20px;
  width:1317px;
  margin-top:40px;
  padding:25px 25px 0px;
}
.table-proveedor{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
table {
  width: 70%;
}
th, td {
  border: 1px solid black;
  padding: 4px;
}
.card-proveedor{
  background-color: rgb(64, 147, 150, 0.7);
}
#btn-proveer-register{
  display: flex;
  justify-self: center;
  margin-top: 15px ;
  background-color:black
}
.cont-laboratorio {
  background-color: rgb(64, 147, 150, 0.7);
  border: 1px solid black;
  border-radius: 20px;
  width: 1317px;
  margin-top: 40px;
  padding: 25px;
}
.lab-list{
  display: flex;
  justify-content: center;
  font-size: 15px;
  gap:40px;
}
.card{
  background-color: rgb(64, 147, 150, 0.7);
  color: white;
  width: 430px;
}
</style >