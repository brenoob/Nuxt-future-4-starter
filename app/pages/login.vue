<template>
  <main class="flex items-center justify-center min-h-screen bg-gray-100">
    <section
      class="flex flex-col items-center justify-center max-w-lg w-full p-6 bg-white rounded-lg shadow-md"
    >
      <h2 class="text-2xl font-bold mb-4">Login</h2>

      <form @submit.prevent="login" class="space-y-4 w-full">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            v-model="form.username"
            type="text"
            id="username"
            class="mt-1 p-2 block w-full border rounded-md"
            :class="{ 'border-red-500': errors.username }"
            required
            placeholder="Username"
          />
          <span v-if="errors.username" class="text-red-500 text-sm">{{
            errors.username
          }}</span>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="mt-1 p-2 block w-full border rounded-md"
            :class="{ 'border-red-500': errors.password }"
            required
            placeholder="Password"
          />
          <span v-if="errors.password" class="text-red-500 text-sm">{{
            errors.password
          }}</span>
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>

      <NuxtLink to="/register" class="mt-4 text-blue-500 hover:underline"
        >Registrar-se</NuxtLink
      >
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({ username: '', password: '' });
const errors = ref({ username: '', password: '' });

const clearErrors = () => {
  errors.value.username = '';
  errors.value.password = '';
};

const login = async () => {
  clearErrors();

  if (!form.value.username) {
    errors.value.username = "O nome de usuário é obrigatório.";
  }
  if (!form.value.password) {
    errors.value.password = "A senha é obrigatória.";
  }

  if (!errors.value.username && !errors.value.password) {
    try {
      // Logando os dados antes da requisição
      console.log('Submitting:', form.value);

      const response = await $fetch("/api/login", {
        method: "POST",
        body: form.value,
      });

      // Logando a resposta do servidor
      console.log('Response:', response);

      if (response.success) {
        alert(response.message);
        form.value.username = '';
        form.value.password = '';
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert("Erro ao realizar o login.");
      console.error(error);
    }
  }
};
</script>
