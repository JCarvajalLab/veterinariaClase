<template>
  <div class="imagen">
    <img
      class="imageLogo"
      :src="require('@/assets/logotienda.png')"
      alt="logo"
    />
    <h1 class="title">Tienda de Mascotas</h1>
    <button type="button" class="btn btn-primary w-100" @click="LoginUsuario()">
      Regresar al Login
    </button>
  </div>
 
  <div class="registro-box">
    <h2>Registro Proveedor</h2>
    <form action="#" method="POST">
      <label for="name" class="form-label">Nombre Proveedor: </label>
      <input
        type="text"
        id="name"
        class="form-control"
        v-model="user.name"
        placeholder="Nombre"
      />
 
      <label for="name" class="form-label">Nombre Persona Contacto: </label>
      <input
        type="text"
        id="name"
        class="form-control"
        v-model="user.namecontacto"
        placeholder="Nombre"
      />
 
      <label for="email" class="form-label">Email:</label>
      <input
        type="email"
        id="email"
        class="form-control"
        v-model="user.email"
        placeholder="email@email.com"
      />
 
      <label for="phone" class="form-label">Teléfono:</label>
      <input
        type="text"
        id="phone"
        class="form-control"
        v-model="user.phone"
        placeholder="1234123"
      />
      <button type="button" class="btn btn-primary w-100">Registrarme</button>
    </form>
  </div>
</template>
 
<script>
export default {
  name: "RegistroProveedor",
  data() {
    return {
      user: {
        name: "",
        email: "",
        namecontacto: "",
        phone: "",
      },
    };
  },
  methods: {
    registroProveedor() {},
    LoginUsuario() {
      this.$router.push("/login");
    },
  },
};
</script>
 
<style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f5f5f5;
}
.registro-box {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.registro-box h2 {
  margin: 0 0 20px;
  font-size: 18px;
  text-align: center;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.registro-box label {
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
}
.registro-box input[type="text"],
.registro-box input[type="email"],
.registro-box input[type="tel"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.registro-box button {
  width: 100%;
  padding: 10px;
  background-color: #6cc0f7;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.registro-box button:hover {
  background-color: #58a6db;
}
</style>