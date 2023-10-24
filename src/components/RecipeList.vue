<template>
  <div>
    <div v-for="recipe in props.recipes" :key="recipe.id">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.description }}</p>
      <img :src="getRecipeImageUrl(recipe.image)" alt="Recipe Image" />
      <button @click="toggleFavorite(recipe)">
        {{ recipe.favorite ? "⭐" : "☆" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";

const props = defineProps(["recipes"]);
const imageBasePath = "/assets";

const mainStore = useMainStore();

const getRecipeImageUrl = (imageName) => {
  return `${imageBasePath}/${imageName}`;
};

const toggleFavorite = (recipe) => {
  mainStore.toggleFavorite(recipe);
  console.log(
    `Recipe "${recipe.title}" favorite status changed to: ${recipe.favorite}`
  );
};
</script>
<style></style>
