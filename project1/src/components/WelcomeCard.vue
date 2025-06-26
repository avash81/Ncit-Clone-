<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const title = ref('Welcome to Vue 3!')
const message = ref('Click the button to see what happens!')

// Method to update the message
const changeMessage = () => {
  message.value = 'You just used the Composition API 🎉'
}
</script>

<style scoped>
.card {
  background-color: #f0f9ff;
  border: 2px solid #42b983;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem auto;
  width: 80%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.card h2 {
  color: #42b983;
}
.card button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
}
.card button:hover {
  background-color: #2c8a64;
}
</style>
