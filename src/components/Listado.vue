<template>
    <div>
      <h2>Listado de productos</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import productosData from '@/data/productos.json';
  
  export default {
    data() {
      return {
        productos: productosData
      };
    }
  };
  </script>
  