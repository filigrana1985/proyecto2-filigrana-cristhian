<template>
    <div>
      <h2>Carrito de compras</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carrito" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.cantidad }}</td>
            <td>{{ item.precio }}</td>
            <td>{{ item.cantidad * item.precio }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import carritoData from '@/data/carrito.json';
  
  export default {
    data() {
      return {
        carrito: carritoData
      };
    }
  };
  </script>
  