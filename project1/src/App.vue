<template>
  <div class="wrapper">
    <h3>Hello Vue!</h3>
    <p>We are going to learn about Vue.</p>
    <p>This is my first Vue app.</p>

    <Hello />
    <Hello1 />
    <Counter />
    <Interpolation />
    <WelcomeCard />
    <VModelDemo />
    <VIfDemo />
  </div>
</template>

<script setup>
import Hello from './components/hello.vue'
import Hello1 from './components/hello1.vue'
import Counter from './components/Counter.vue'
import Interpolation from './components/interpolation.vue'
import WelcomeCard from './components/WelcomeCard.vue'
import VModelDemo from './components/VModelDemo.vue'
import VIfDemo from './components/VIfDemo.vue'
</script>

<style scoped>
.wrapper {
  text-align: center;
  margin-top: 50px;
  color: blue;
}
</style>
