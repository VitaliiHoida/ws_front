import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaceView from "@/views/PlaceView.vue"
import RoomView from "@/views/RoomView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/room',
    name: 'room',
    component: RoomView
  },
  {
    path: '/place',
    name: 'place',
    component: PlaceView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
