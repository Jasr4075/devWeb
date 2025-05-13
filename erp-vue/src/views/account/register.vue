<template>
    <div class="register-wrapper">
      <div class="container">
        <div class="styled-card p-4">
          <h2 class="text-center mb-4 fw-bold">Registrar</h2>
          
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Digite seu nome"
                v-model="formData.name"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Digite seu email"
                v-model="formData.email"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="password" class="form-label">Senha</label>
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Digite sua senha"
                v-model="formData.password"
                required
              />
            </div>
  
            <div class="mb-3">
              <label for="phone" class="form-label">Telefone</label>
              <input
                type="text"
                id="phone"
                class="form-control"
                placeholder="Digite seu telefone"
                v-model="formData.phone"
              />
            </div>
  
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                id="username"
                class="form-control"
                placeholder="Digite seu username"
                v-model="formData.username"
              />
            </div>
  
            <!-- 
            <div class="mb-3">
              <label for="profile_picture_url" class="form-label">URL da Foto de Perfil</label>
              <input
                type="text"
                id="profile_picture_url"
                class="form-control"
                placeholder="Digite a URL da foto de perfil"
                v-model="formData.profile_picture_url"
              />
            </div>
            -->
  
            <button type="submit" class="btn btn-primary w-100">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Router (opcional - se você estiver usando Vue Router)
  const router = useRouter();
  
  // Estado do formulário
  const formData = ref({
    name: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    // profile_picture_url: ''
  });
  
  // Método para lidar com o registro
  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData.value);
    
    // Exemplo de redirecionamento após o registro bem-sucedido
    // router.push('/login');
  };
  </script>
  
  <style scoped>
  .register-wrapper {
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
    padding: 2rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-label {
    font-weight: 500;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-control {
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ced4da;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .form-control:focus {
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
  </style>