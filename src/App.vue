<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="container-fluid">
    <div class="w-75 m-auto">
      <RouterView />
    </div>
  </div>
</template>

