<template>
    <div class="login-wrapper">
      <div class="container">
        <div class="styled-card p-4">
          <div class="card-body">
            <h2 class="text-center mb-4 fw-bold">Iniciar Sesión</h2>
            
            <form @submit.prevent="handleLogin" class="styled-form">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Digite seu email"
                  v-model="credentials.email"
                  required
                  autocomplete="off"
                />
              </div>
              
              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Digite sua senha"
                  v-model="credentials.password"
                  required
                />
              </div>
              
              <button
                class="btn btn-primary w-100 mb-3"
                type="submit"
                :disabled="isLoading"
              >
                {{ isLoading ? "Carregando..." : "Login" }}
              </button>
              
              <div class="text-center">
                <router-link to="/register">
                  Não tem uma conta? Cadastre-se aqui
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Router (opcional - se você estiver usando Vue Router)
  const router = useRouter();
  
  // Estado do componente
  const credentials = ref({
    email: '',
    password: ''
  });
  const isLoading = ref(false);
  
  // Método para lidar com o login
  const handleLogin = () => {
    isLoading.value = true;
    
    // Simulação de carregamento
    setTimeout(() => {
      console.log('Credenciais enviadas:', credentials.value);
      isLoading.value = false;
      
      // Aqui você pode adicionar a lógica para redirecionar após o login
      // router.push('/dashboard');
    }, 1500);
  };
  </script>
  
  <style scoped>
  .login-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  
  .styled-card {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .styled-form .form-label {
    font-weight: 500;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .styled-form .form-control {
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ced4da;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .styled-form .form-control:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  
  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  
  .btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
  
  .btn-primary:disabled {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    opacity: 0.65;
    cursor: not-allowed;
  }
  
  .w-100 {
    width: 100%;
  }
  
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .fw-bold {
    font-weight: 600;
  }
  
  .p-4 {
    padding: 1.5rem;
  }
  
  a {
    color: #0d6efd;
    text-decoration: none;
  }
  
  a:hover {
    color: #0a58ca;
    text-decoration: underline;
  }
  </style>