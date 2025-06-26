<template>
  <div>
    <h3>Enter your name:</h3>
    <input v-model="name" />
    <p>Hello, {{ name }}!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
</script>
