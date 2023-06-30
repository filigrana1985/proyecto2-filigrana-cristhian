import Vue from 'vue'
import VueRouter from 'vue-router'
import Registro from './components/Registro.vue'
import Login from './components/Login.vue'
import Listado from './components/Listado.vue'
import Info from './components/Info.vue'
import Carrito from './components/Carrito.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/registro', component: Registro },
  { path: '/login', component: Login },
  { path: '/listado', component: Listado },
  { path: '/info/:id', component: Info },
  { path: '/carrito', component: Carrito },
  { path: '*', redirect: '/listado' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
