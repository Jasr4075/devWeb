<template>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container d-flex align-items-center">
        <Sidebar :isOpen="sidebarOpen" :currentPath="currentPath" @close="sidebarOpen = false" />
        <!-- Logo/Brand -->
        <a href="/" class="navbar-brand">ERP Cloud</a>

          <!-- Sidebar separado -->
        
        <!-- Hamburger Toggle Button for Mobile -->
        <button 
          class="navbar-toggler" 
          type="button" 
          @click="isNavOpen = !isNavOpen" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Navbar Content -->
        <div 
          class="collapse navbar-collapse" 
          :class="{ 'show': isNavOpen }" 
          id="navbarContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <button 
                class="btn btn-primary ms-2" 
                @click="handleLoginClick"
              >
                Entrar
              </button>
            </li>
            <li class="nav-item">
              <button 
                class="btn btn-outline-primary ms-2" 
                @click="handleSignUpClick"
              >
                Cadastrar
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Sidebar Toggle Button (positioned at bottom-left) -->

    </nav>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/ui/sidebar.vue';
  import { ref } from 'vue';
  
  // Props
  interface Props {
    onLoginClick?: () => void;
    onSignUpClick?: () => void;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    onLoginClick: () => window.location.href = '/login',
    onSignUpClick: () => window.location.href = '/register'
  });
  
  // State
  const isNavOpen = ref(false);
  
  // Methods
  const handleLoginClick = () => {
    props.onLoginClick?.();
  };
  
  const handleSignUpClick = () => {
    props.onSignUpClick?.();
  };
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    // Aquí puedes emitir un evento para controlar el sidebar desde el componente padre
    // o implementar la lógica del sidebar directamente
  };
  </script>
  
  <style scoped>
  /* Navbar Styles */
  .navbar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 0.75rem 1rem;
  }
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: #6e8efb !important;
  }
  
  .navbar-toggler {
    border: none;
    padding: 0.25rem 0.5rem;
  }
  
  .navbar-toggler:focus {
    box-shadow: none;
    outline: none;
  }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    width: 1.5em;
    height: 1.5em;
  }
  
  /* Navigation Links */
  .nav-link {
    color: #343a40;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
  
  .nav-link:hover {
    color: #6e8efb;
  }
  
  /* Buttons */
  .btn {
    font-weight: 500;
    padding: 0.375rem 1rem;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }
  
  .btn-primary {
    background-color: #6e8efb;
    border-color: #6e8efb;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #5a7df9;
    border-color: #5a7df9;
  }
  
  .btn-outline-primary {
    color: #6e8efb;
    border-color: #6e8efb;
  }
  
  .btn-outline-primary:hover {
    background-color: #6e8efb;
    color: white;
  }
  
  .ms-auto {
    margin-left: auto !important;
  }
  
  .ms-2 {
    margin-left: 0.5rem !important;
  }
  
  /* Sidebar Toggle Button */
  .sidebar-toggle {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1030;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='%236e8efb' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'/%3e%3c/svg%3e");
  }
  
  /* Bootstrap-like utility classes */
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  
  .navbar-light {
    background-color: #f8f9fa;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
  
  /* Mobile Responsive */
  @media (max-width: 991.98px) {
    .navbar-expand-lg .navbar-collapse {
      display: none !important;
    }
    
    .navbar-expand-lg .navbar-collapse.show {
      display: block !important;
    }
    
    .navbar-nav {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding-top: 0.5rem;
    }
    
    .navbar-nav .nav-item {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    
    .navbar-nav .btn {
      display: block;
      width: 100%;
      margin-left: 0 !important;
      margin-top: 0.5rem;
    }
  }
  
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
    
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
      align-items: center;
    }
    
    .navbar-expand-lg .navbar-nav .nav-item {
      margin-left: 0.5rem;
    }
  }
  </style>