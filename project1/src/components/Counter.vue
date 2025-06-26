<template>
    <button @click="count++"Count is:></button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)

// import {ref } from 'vue '
// const message = ref ('hello vue') 
</script>

<style scoped>
button {font-weight: bold,}
</style>