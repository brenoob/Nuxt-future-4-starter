<script setup lang="ts"></script>

<template>
  <div>
    <header class="py-4 border-b">
        <nav class="flex container items-center">
            <NuxtLink to="/" class="flex items-center gap-1" href="">
                <img class="w-14" src="/favicon.ico" alt="logo">
                <span class="text-3xl font-bold">Nuxt future 4 starter</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact">contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">login</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
  </div>
</template>
