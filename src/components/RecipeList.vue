<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe.id">
      <p>{{ recipe.title }}</p>
    </div>
  </div>
</template>

<script setup>
const recipes = defineProps(["recipes"]);
</script>
<style></style>
