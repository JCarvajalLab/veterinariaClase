<template>
    <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <div class="card-header alert alert-primary">Confirmación</div>
        <h4 class="card-title text-center">{{ message }}</h4>
       
      <router-link to='/Home' class="btn btn-primary w-100">Regresar al Home</router-link>
      </div>
     
    </div>
  </div>
 
</template>
 
<script>
import axios from 'axios';
export default{
    name: 'ConfirmacionProveedor',
    data (){
        return{
        message:'',
        status:''
        }
    },
    methods:{
        confirmar(){
            axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/providerRegisterResp.json')
            .then(response => {
                this.message = response.data.registerProviderResponse.message,
                this.status = response.data.registerProviderResponse.status,
                console.log(this.status)
})
.catch(error => {
    console.error('error en la solicitud', error);
    })
},
    },
    mounted() {
        this.confirmar();
    }
}
 
</script>