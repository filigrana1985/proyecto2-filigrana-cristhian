<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
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
    login() {
      axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Lógica para manejar la respuesta del servidor en caso de inicio de sesión exitoso
        console.log('Inicio de sesión exitoso:', response.data);
      })
      .catch(error => {
        // Lógica para manejar el error de inicio de sesión
        console.error('Error de inicio de sesión:', error);
      });
    }
  }
};
</script>

  