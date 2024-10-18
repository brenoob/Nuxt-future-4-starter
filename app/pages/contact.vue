<template>
    <main class="flex items-center justify-center min-h-screen bg-gray-100">
      <section
        class="flex flex-col items-center justify-center max-w-lg w-screen mt-10 p-6 bg-white rounded-lg shadow-md"
      >
        <h2 class="text-2xl font-bold mb-4">Contato</h2>
  
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Nome</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="mt-1 p-2 block w-full border rounded-md"
              :class="{ 'border-red-500': errors.name }"
            />
            <span v-if="errors.name" class="text-red-500 text-sm">{{
              errors.name
            }}</span>
          </div>
  
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="mt-1 p-2 block w-full border rounded-md"
              :class="{ 'border-red-500': errors.email }"
            />
            <span v-if="errors.email" class="text-red-500 text-sm">{{
              errors.email
            }}</span>
          </div>
  
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Mensagem</label
            >
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="mt-1 p-2 block w-full border rounded-md"
              :class="{ 'border-red-500': errors.message }"
            ></textarea>
            <span v-if="errors.message" class="text-red-500 text-sm">{{
              errors.message
            }}</span>
          </div>
  
          <button
            type="submit"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const form = ref({
    name: "",
    email: "",
    message: "",
  });
  
  const errors = ref({
    name: "",
    email: "",
    message: "",
  });
  
  const submitForm = async () => {
    clearErrors();
  
    if (!form.value.name) {
      errors.value.name = "O nome é obrigatório.";
    }
    if (!form.value.email || !validEmail(form.value.email)) {
      errors.value.email = "Por favor, insira um e-mail válido.";
    }
    if (!form.value.message) {
      errors.value.message = "A mensagem é obrigatória.";
    }
  
    if (!errors.value.name && !errors.value.email && !errors.value.message) {
      // Simular envio de formulário
      try {
        await $fetch("/api/contact", {
          method: "POST",
          body: form.value,
        });
        alert("Formulário enviado com sucesso!");
        resetForm();
      } catch (error) {
        alert("Erro ao enviar o formulário.");
      }
    }
  };
  
  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  const clearErrors = () => {
    errors.value.name = "";
    errors.value.email = "";
    errors.value.message = "";
  };
  
  const resetForm = () => {
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  };
  </script>
  