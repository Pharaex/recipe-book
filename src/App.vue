<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/AddRecipe">Add Recipe</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import Homepage from "./views/Homepage.vue";
import AddRecipe from "./views/AddRecipe.vue";
</script>
