<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Over ons</RouterLink>
    <RouterLink to="/board">Spel</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100vw;
  font-size: 12px;
  text-align: center;
  background-color: rgb(233, 245, 233);
  padding: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>
