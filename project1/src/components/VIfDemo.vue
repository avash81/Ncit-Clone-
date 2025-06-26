<template>
  <div>
    <button @click="isVisible = !isVisible">Toggle</button>
    <p v-if="isVisible">I am visible</p>
    <p v-else>I am hidden</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
</script>
