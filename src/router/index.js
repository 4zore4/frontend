import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import('../views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/LoginView.vue')
  }
]

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  NProgress.start();
  next()
})

router.afterEach((to,from) =>{
  NProgress.done();

})

export default router
