import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Dashboard from '../views/dashboard/dashboard.vue'
import Reports from '../views/reports/reports.vue'
import Login from '../views/account/login.vue'
import Register from '../views/account/register.vue'

const routes = [
  { path: '/',
    name: 'Home', 
    component: Home 
  },
  { path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard 
  },
  { path: '/reports', 
    name: 'Reports', 
    component: Reports 
  },
  { path: '/login', 
    name: 'Login', 
    component: Login 
  },
  { path: '/register',
     name: 'Register',
      component: Register 
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
