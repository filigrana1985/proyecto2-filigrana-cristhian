<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Lógica para manejar la respuesta del servidor en caso de registro exitoso
        console.log('Registro exitoso:', response.data);
      })
      .catch(error => {
        // Lógica para manejar el error de registro
        console.error('Error de registro:', error);
      });
    }
  }
};
</script>

  