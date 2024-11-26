<template>
    <div class="general" :style="{ backgroundImage: 'url(' + imageFondo + ')' }">
    <img class="imageLogo" :src="imageLogo" alt="logo">
        <h1 class="titulo">EduPets</h1>
        <div class="container">
            <h5 class="confirmacion alert alert-primary">CONFIRMACION</h5>
            <h3 class="felicitaciones">Felicidades!</h3>
            <p>{{ register.message }}</p>
            <button id="btn-return-login" type="button" class="btn btn-primary btn-block mb-3" @click="regresarALogin">Regresar al login</button>
        </div>
    </div>
</template>
 
<script>
    import axios from 'axios';
    export default {
        name: 'ConfirmacionUsuario',
    data(){
        return{
            imageFondo:'https://media.istockphoto.com/id/1417882544/es/foto/gran-grupo-de-gatos-y-perros-mirando-a-la-c%C3%A1mara-sobre-fondo-azul.jpg?s=1024x1024&w=is&k=20&c=M_QTdfV5N9isysghP0VhE_y63omRrkUjwOvLIScbThE=',
            imageLogo:'https://img.freepik.com/vector-gratis/logo-animal-perro-dibujado-mano_23-2148910632.jpg',
            register:{
                message: '',
            }
        }
    },    
    mounted() {
      axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/registroresp.json')
        .then(resp => {
          this.register = resp.data.registerResponse;
        })
        .catch(error => {
        console.error('Error al obtener los datos:', error);
        });
    },
    methods: {
        regresarALogin() {
            this.$router.push('login');
        }
    }
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
}
.imageLogo{
    display: flex;
    justify-self: center;
    width:120px;
    height:120px;
    margin-top:10px;
}
.titulo{
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
}
.container {
    background-color:rgb(64, 147, 150, 0.7);
    color: white;
    width: 500px;
    border-radius:10px;
    Margin-top: 20px;
    padding-bottom: 5px;
}
.confirmacion{
    display: flex;
    justify-self: center;
    width: 500px;
}
#btn-return-login{
  background-color:black;
  display: flex;
  justify-self: center;
  font-weight: bold;
}
</style>