<template>
    <div>
      <section class="hero-section py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1>{{ heroTitle }}</h1>
              <p class="lead mb-3">{{ heroSubtitle }}</p>
              <div>
                <button v-if="heroPrimaryButtonText" class="btn btn-light btn-lg me-2 mb-2 mb-md-0" @click="handleHeroPrimaryAction">{{ heroPrimaryButtonText }}</button>
                <button v-if="heroSecondaryButtonText" class="btn btn-outline-light btn-lg mb-2 mb-md-0" @click="handleHeroSecondaryAction">{{ heroSecondaryButtonText }}</button>
              </div>
            </div>
            <div class="col-lg-6 text-center">
              <img :src="heroImage" :alt="heroImageAlt" class="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>
  
      <div id="features" class="container py-5">
        <h2 class="text-center mb-4">{{ featuresTitle }}</h2>
        <div class="row gy-4">
          <div class="col-md-6 col-lg-4" v-for="feature in features" :key="feature.title">
            <div class="feature-card card text-center h-100 p-4">
              <div class="feature-icon mb-3">
                <component :is="feature.icon" style="font-size: 2.5rem" />
              </div>
              <h5 class="card-title mb-2">{{ feature.title }}</h5>
              <p class="card-text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row align-items-center gy-4">
            <div class="col-lg-6 text-center">
              <img :src="insightsImage" :alt="insightsImageAlt" class="img-fluid rounded shadow" />
            </div>
            <div class="col-lg-6">
              <h2>{{ insightsTitle }}</h2>
              <p class="lead mb-3">{{ insightsSubtitle }}</p>
              <ul class="list-unstyled">
                <li v-for="(point, index) in insightPoints" :key="index" class="mb-2">
                  <strong class="text-primary">{{ point.strong }}</strong> {{ point.text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <section class="py-5 text-center bg-white">
        <div class="container">
          <h2>{{ ctaTitle }}</h2>
          <p class="lead mb-4">{{ ctaSubtitle }}</p>
          <div>
            <button v-if="ctaPrimaryButtonText" class="btn btn-primary btn-lg me-2 mb-2 mb-md-0" @click="handleCtaPrimaryAction">{{ ctaPrimaryButtonText }}</button>
            <button v-if="ctaSecondaryButtonText" class="btn btn-outline-primary btn-lg mb-2 mb-md-0" @click="handleCtaSecondaryAction">{{ ctaSecondaryButtonText }}</button>
          </div>
        </div>
      </section>
  
      <footer class="footer py-4">
        <div class="container">
          <div class="row gy-3">
            <div class="col-md-4 text-center text-md-start">
              <h5>{{ footerCompanyName }}</h5>
              <p class="mb-0">{{ footerDescription }}</p>
            </div>
            <div class="col-md-4 text-center">
              <h5>{{ footerQuickLinksTitle }}</h5>
              <ul class="list-unstyled mb-0">
                <li v-for="link in footerQuickLinks" :key="link.text">
                  <a :href="link.url" class="text-white">{{ link.text }}</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 text-center text-md-end">
              <h5>{{ footerContactUsTitle }}</h5>
              <address class="mb-0">
                {{ footerContact.email }}<br />
                {{ footerContact.phone }}
              </address>
            </div>
          </div>
          <hr class="bg-light my-3" />
          <p class="text-center mb-0">&copy; {{ currentYear }} {{ footerCompanyName }}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import MdiCurrencyUsd from '~icons/mdi/currency-usd';
  import MdiWarehouse from '~icons/mdi/warehouse';
  import MdiCart from '~icons/mdi/cart';
  import MdiClipboardText from '~icons/mdi/clipboard-text';
  import MdiAccountGroup from '~icons/mdi/account-group';
  import MdiChartBar from '~icons/mdi/chart-bar';
  
  // --- Hero Section Data ---
  const heroTitle = ref('Sua Empresa. Simplificada.');
  const heroSubtitle = ref('ERP Cloud é uma solução SaaS completa que simplifica as operações do seu negócio, das finanças ao estoque, tudo em uma única plataforma.');
  const heroPrimaryButtonText = ref('Começar Agora');
  const heroSecondaryButtonText = ref('Saiba Mais');
  const heroImage = ref('/src/assets/placeholder_600x400.png');
  const heroImageAlt = ref('Painel ERP');
  
  function handleHeroPrimaryAction() {
    console.log('Botão Começar Agora clicado!');
  }
  
  function handleHeroSecondaryAction() {
    console.log('Botão Saiba Mais clicado!');
  }
  
  // --- Features Section Data ---
  const featuresTitle = ref('Funcionalidades Poderosas para Seu Negócio');
  const features = ref([
    {
      title: 'Gestão Financeira',
      text: 'Controle de contas a pagar/receber, fluxo de caixa, conciliação bancária e relatórios financeiros.',
      icon: MdiCurrencyUsd,
    },
    {
      title: 'Controle de Estoque',
      text: 'Acompanhe entradas e saídas, gerencie inventário, rastreie produtos e integre com pedidos de venda/compra.',
      icon: MdiWarehouse,
    },
    {
      title: 'Gestão de Vendas',
      text: 'Emissão de pedidos, integração com NF-e, controle de comissões e metas de vendedores.',
      icon: MdiCart,
    },
    {
      title: 'Gestão de Compras',
      text: 'Solicitações de compra, ordens de compra, gerenciamento de fornecedores e cotações.',
      icon: MdiClipboardText,
    },
    {
      title: 'Gestão de Projetos',
      text: 'Cronogramas, tarefas, alocação de recursos e acompanhamento de progresso.',
      icon: MdiAccountGroup,
    },
    {
      title: 'Dashboards & Relatórios',
      text: 'Visualização de indicadores, gráficos e relatórios personalizáveis.',
      icon: MdiChartBar,
    },
  ]);
  
  // --- Insights Section Data ---
  const insightsTitle = ref('Insights Empresariais em Tempo Real');
  const insightsSubtitle = ref('Tome decisões baseadas em dados com nossos painéis e ferramentas de análise.');
  const insightsImage = ref('/src/assets/placeholder_500x350.png');
  const insightsImageAlt = ref('Análises ERP');
  const insightPoints = ref([
    { strong: 'Dashboards personalizáveis', text: 'adaptados às necessidades do seu negócio' },
    { strong: 'Indicadores financeiros', text: 'atualizados em tempo real' },
    { strong: 'Alertas de estoque', text: 'para evitar falta de produtos' },
    { strong: 'Acompanhamento de desempenho', text: 'de vendas por equipe ou vendedor' },
  ]);
  
  // --- CTA Section Data ---
  const ctaTitle = ref('Pronto para Transformar Seu Negócio?');
  const ctaSubtitle = ref('Junte-se a milhares de empresas que confiam no ERP Cloud para gerenciar suas operações.');
  const ctaPrimaryButtonText = ref('Iniciar Teste Gratuito');
  const ctaSecondaryButtonText = ref('Agendar Demonstração');
  
  function handleCtaPrimaryAction() {
    console.log('Botão Iniciar Teste Gratuito clicado!');
  }
  
  function handleCtaSecondaryAction() {
    console.log('Botão Agendar Demonstração clicado!');
  }
  
  // --- Footer Section Data ---
  const footerCompanyName = ref('ERP Cloud');
  const footerDescription = ref('Solução completa de gestão empresarial na nuvem.');
  const footerQuickLinksTitle = ref('Links Rápidos');
  const footerQuickLinks = ref([
    { url: '#features', text: 'Funcionalidades' },
    { url: '#pricing', text: 'Preços' },
    { url: '#contact', text: 'Contato' },
  ]);
  const footerContactUsTitle = ref('Fale Conosco');
  const footerContact = ref({
    email: 'contato@erpcloud.com',
    phone: '+55 (11) 98765-4321',
  });
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped>
  /* --- Hero Section Styles --- */
  .hero-section {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
  }
  
  /* --- Features Section Styles --- */
  .feature-card {
    height: 100%;
    transition: transform 0.3s ease;
    border: 1px solid #dee2e6;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .feature-icon {
    color: #6e8efb;
    margin-bottom: 1rem;
  }
  
  /* --- Footer Section Styles --- */
  .footer {
    background-color: #343a40;
    color: white;
  }
  
  .footer a {
    color: white;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  
  /* --- Bootstrap-like utility classes --- */
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .col-lg-6 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  .col-md-6, .col-lg-4, .col-md-4 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  @media (min-width: 768px) {
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .text-md-start {
      text-align: left !important;
    }
    .text-md-end {
      text-align: right !important;
    }
    .mb-md-0 {
      margin-bottom: 0 !important;
    }
  }
  
  @media (min-width: 992px) {
    .col-lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .text-lg-start {
      text-align: left !important;
    }
    .mb-lg-0 {
      margin-bottom: 0 !important;
    }
  }
  
  .align-items-center {
    align-items: center !important;
  }
  
  .text-center {
    text-align: center !important;
  }
  
  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  
  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .p-4 {
    padding: 1.5rem !important;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem !important;
  }
  
  .mb-3 {
    margin-bottom: 1rem !important;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }
  
  .mb-0 {
    margin-bottom: 0 !important;
  }
  
  .me-2 {
    margin-right: 0.5rem !important;
  }
  
  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .gy-4 > * {
    margin-top: 1.5rem !important;
  }
  
  .gy-3 > * {
    margin-top: 1rem !important;
  }
  
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }
  
  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  
  .btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
    background-color: transparent;
  }
  
  .btn-primary {
    color: #fff;
    background-color: #6e8efb;
    border-color: #6e8efb;
  }
  
  .btn-outline-primary {
    color: #6e8efb;
    border-color: #6e8efb;
    background-color: transparent;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .bg-white {
    background-color: #fff !important;
  }
  
  .text-primary {
    color: #6e8efb !important;
  }
  
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .rounded {
    border-radius: 0.25rem !important;
  }
  
  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
  
  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  
  .h-100 {
    height: 100% !important;
  }
  
  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
    height: 1px;
  }
  
  .bg-light {
    background-color: #f8f9fa !important;
  }
  </style>