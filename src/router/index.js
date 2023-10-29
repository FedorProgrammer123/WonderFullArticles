import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from "../views/AboutUs.vue"
import Contacts from "../views/Contacts.vue"
import Languages from '../views/articles/Languages.vue'
import Camera from '../views/articles/Camera.vue'
import ItSpecialists from '../views/articles/It-Specialists.vue'
import Python from '../views/articles/Python.vue'
import LearnGit from '../views/articles/LearnGit.vue'
import JSSuperLanguage from '../views/articles/JSSuperLanguage.vue'
import Google from '../views/articles/Google.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/about',
      component: AboutUs
    },
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path:'/languages',
      component: Languages
    },
    {
      path: '/Camera',
      component: Camera
    },
    {
      path: '/ItSpecialists',
      component: ItSpecialists
    },
    {
      path: '/Python',
      component: Python
    },
    {
      path: '/LearnGit',
      component: LearnGit
    },
    {
      path: '/JSSuperLanguage',
      component: JSSuperLanguage
    },
    {
      path: '/Google',
      component: Google
    }
  ]
})

export default router
