import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AlimentosView from '@/views/AlimentosView.vue'
import BrinquedosView from '@/views/BrinquedosView.vue'
import HigenieView from '@/views/HigenieView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/alimentos', component: AlimentosView },
  { path: '/brinquedos', component: BrinquedosView },
  { path: '/higenie', component: HigenieView},
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
