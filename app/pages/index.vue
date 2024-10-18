<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <section
      class="flex flex-col items-center justify-center max-w-xl w-full p-6 bg-white rounded-lg shadow-md"
    >
      <h1 class="text-3xl font-bold mb-6 text-center">Bem-vindo ao Nuxt 3 App!</h1>
      <p class="text-lg text-gray-700 mb-4 text-center">
        Esta é a página inicial padrão. Navegue pelo site usando os links abaixo.
      </p>

      <div class="space-x-4">
        <NuxtLink
          to="/login"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/register"
          class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
        >
          Registrar-se
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Esta página não requer lógica adicional por enquanto.
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui, se necessário */
</style>
