import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UsersView from '../views/users/view.vue'
import UserCreateView from '../views/users/create.vue'
import UserEditView from '../views/users/edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }, 
    {
      path: '/users',
      name: 'users',
      component: UsersView
    }, 
    {
      path: '/user/create',
      name: 'UserCreate',
      component: UserCreateView 
    },
    {
      path: '/user/:id/edit/',
      name: 'UserEdit',
      component: UserEditView 
    },
  ]
})

export default router
