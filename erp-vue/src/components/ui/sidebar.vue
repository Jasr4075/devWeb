<template>
    <div class="sidebar-wrapper">
        <!-- Botão para abrir o sidebar -->
        <button 
        class="toggle-button" 
        :class="[
            `btn-${toggleButtonStyle}`,
            `position-${toggleButtonPosition}`
        ]"
        @click="toggleSidebar"
        aria-label="Toggle sidebar"
        >
        <List :size="10" />
    </button>
  
      <!-- Overlay para fechar o sidebar ao clicar fora -->
      <div 
        class="overlay" 
        :class="{ 'open': isOpen }" 
        @click="toggleSidebar"
      ></div>
  
      <!-- Sidebar -->
      <div class="sidebar-container" :class="{ 'open': isOpen }">
        <div class="sidebar-header">
          <div class="sidebar-brand">ERP Cloud</div>
          <button class="close-button" @click="toggleSidebar">
            <X />
          </button>
        </div>
        <nav class="sidebar-nav">
          <a 
            v-for="item in navItems" 
            :key="item.path" 
            :href="item.path" 
            class="nav-link" 
            :class="{ 'active': currentPath === item.path }"
          >
            <component :is="item.icon" />
            {{ item.label }}
          </a>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { Gauge, FileText, X, List } from 'lucide-vue-next';
  import { ref, computed } from 'vue';
  
  // Tipos para as props
  interface Props {
    toggleButtonPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    toggleButtonStyle?: 'primary' | 'secondary' | 'light' | 'dark';
  }
  
  // Props com valores padrão
  const props = withDefaults(defineProps<Props>(), {
    toggleButtonPosition: 'top-left',
    toggleButtonStyle: 'primary'
  });
  
  // Estado do componente
  const isOpen = ref(false);
  
  // Caminho atual (simulado - em uma aplicação real você usaria o router)
  const currentPath = ref('/dashboard');
  
  // Itens de navegação
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Gauge },
    { path: '/reports', label: 'Relatórios', icon: FileText }
  ];
  
  // Método para alternar o sidebar
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  /* Estilos gerais */
  .sidebar-wrapper {
    position: relative;
  }
  
  /* Sidebar container */
  .sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 280px;
    background-color: #fff;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
    z-index: 1001;
    transition: transform 0.3s ease;
    transform: translateX(-280px);
  }
  
  .sidebar-container.open {
    transform: translateX(0);
  }
  
  /* Sidebar header */
  .sidebar-header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .sidebar-brand {
    font-weight: 700;
    font-size: 1.25rem;
    color: #6e8efb;
    flex-grow: 1;
  }
  
  .close-button {
    background: none;
    border: none;
    color: #6c757d;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  .close-button:hover {
    color: #2e3a59;
  }
  
  /* Sidebar navigation */
  .sidebar-nav {
    padding: 1.5rem;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    color: #5a5c69;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #f8f9fc;
    color: #4e73df;
  }
  
  .nav-link.active {
    background-color: #f0f4ff;
    color: #4e73df;
    font-weight: 600;
  }
  
  .nav-link svg {
    margin-right: 0.75rem;
    font-size: 1.1rem;
  }
  
  /* Toggle button */
  .toggle-button {
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
    border: none;
    cursor: pointer;
  }
  
  /* Button positions */
  .position-top-left {
    top: 20px;
    left: 20px;
  }
  
  .position-top-right {
    top: 20px;
    right: 20px;
  }
  
  .position-bottom-left {
    bottom: 20px;
    left: 20px;
  }
  
  .position-bottom-right {
    bottom: 20px;
    right: 20px;
  }
  
  /* Button styles */
  .btn-primary {
    background-color: #4e73df;
    color: white;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-light {
    background-color: #f8f9fa;
    color: #212529;
  }
  
  .btn-dark {
    background-color: #343a40;
    color: white;
  }
  
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .overlay.open {
    opacity: 1;
    visibility: visible;
  }
  </style>

