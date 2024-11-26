<template>
   
    <div class="container">
        <div class="row">
            <div class="cabecera col-md-12">
                <div class="image col-md-2">
                    logo
                </div>
                <div class="titulo col-md-8">
                    <h1 class="text-center">{{ generalinfo.name }}</h1>
                    <p class="text-center">{{ generalinfo.description }}</p>
                    <p class="text-center">{{ generalinfo.mission }}</p>
                </div>
            </div>
            <div class="proveedores">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody v-for="(provider, index) in providers" :key="index">
                        <tr>
                            <td>{{ provider.name }}</td>
                            <td>{{ provider.contactInfo.email }}</td>
                            <td>{{ provider.contactInfo.phone }}</td>
                        </tr>
                    </tbody>
                </table>
                <router-link to="/RegistroProveedor" > Registrar Proveedor</router-link>
            </div>
            <div class="laboratorios w-100 d-flex ">
                <div class="card  w-40" v-for="(laboratory, index) in laboratories" :key="index">
                    <div class="card-header alert alert-primary ">{{ laboratory.name }}</div>
                    <div class="card-body">
                        <h3 class="card-title">{{ laboratory.contactInfo.phone }} {{ laboratory.contactInfo.email }}
                        </h3>
                        <p v-for="(service, index) in laboratory.services" :key="index">{{ service }}</p>
                    </div>
                </div>
            </div>
            <div class="listaproductos w-50">
                <div class="card w-50">
                    <div class="card-header alert alert-primary ">Lista de Productos</div>
                    <div class="card-body">
                        <h3 class="card-title"><router-link to="/Productos">Ir a lista</router-link></h3>
                </div>
            </div>
        </div>
        <footer>
           
            <div class="contactinfo">
                <ul>
                    <li>{{ contactInfo.address}}</li>
                    <li>{{ contactInfo.phone }}</li>
                    <li>{{ contactInfo.email }}</li>
                </ul>
            </div>
            <div class="socialmedia">
                <ul>
                    <li v-for="(link, platform) in contactInfo.socialMedia" :key="platform">{{link}}</li>
                   
                </ul>
            </div>
        </footer>
    </div>
    </div>
</template>
 
<script>
import axios from 'axios';
export default {
    name: "HomePage",
    data() {
        return {
            providers: [],
            laboratories: [],
            generalinfo: [],
            socialMedia: [],
            contactInfo: [],
        }
    },
    methods: {
        getInfo() {
            axios.get('https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/home.json')
                .then(resp => {
                    this.providers = resp.data.home.providers,
                    this.laboratories = resp.data.home.laboratories,
                    this.generalinfo = resp.data.home.generalInfo,
                    this.contactInfo = resp.data.home.contactInfo,
                    this.socialMedia = resp.data.home.socialMedia
                   
                })
        },
 
    },
    mounted() {
        this.getInfo()
    }
}
</script>
 
<style>
.titulo {
    background-color: blue;
}
 
.image {
    background-color: red;
}
 
.cabecera {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: green;
    width: 100vw;
}
 
.proveedores {
    margin: 15px;
}
</style>