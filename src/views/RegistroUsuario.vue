<template>
  <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h5 class="card-title text-center">Registro Usuario</h5>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input type="text" id="name" class="form-control" v-model="user.name" placeholder="Nombre" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" id="email" class="form-control" v-model="user.email" placeholder="email@email.com" />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono:</label>
            <input type="text" id="phone" class="form-control" v-model="user.phone" placeholder="1234123" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="password" id="password" class="form-control" v-model="user.password" />
          </div>
          <div class="mb-3">
            <label for="repeatPassword" class="form-label">Repetir Contraseña:</label>
            <input type="password" id="repeatPassword" class="form-control" v-model="user.repeatPassword" />
          </div>
          <button type="button" class="btn btn-primary w-100" @click="registroUsuario()">Registrarme</button>
        </form>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
    name: "RegistroUsuario",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
  methods: {
    registroUsuario() {
     
    },
  },
};
</script>
 
<style>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>