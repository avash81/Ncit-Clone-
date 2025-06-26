<template>
  <div class="box">
    <h2>Hello, {{ name }} </h2>
  </div>
</template>

<script setup>
defineProps(['name']) // receive props from parent
</script>

<style scoped>
.box {
  padding: 1rem;
  border: 2px solid #42b983;
  border-radius: 10px;
  margin: 1rem auto;
  text-align: center;
  background-color: #f9fffb;
}
</style>
