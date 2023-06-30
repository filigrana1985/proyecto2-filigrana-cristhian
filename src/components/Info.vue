<template>
    <div>
      <h2>Información del producto</h2>
      <div v-if="producto">
        <h3>{{ producto.nombre }}</h3>
        <p>Precio: {{ producto.precio }}</p>
        <p>Descripción: {{ producto.descripcion }}</p>
      </div>
      <div v-else>
        <p>No se encontró información del producto.</p>
      </div>
    </div>
  </template>
  
  <script>
  import productosData from '@/data/productos.json';
  
  export default {
    data() {
      return {
        producto: null
      };
    },
    mounted() {
      // Simular obtención de datos del producto por ID desde el servidor
      const productId = this.$route.params.id;
      this.producto = productosData.find(producto => producto.id === productId);
    }
  };
  </script>
  