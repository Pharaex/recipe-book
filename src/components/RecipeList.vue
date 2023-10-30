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
import { computed } from "vue";

const props = defineProps(["recipes", "favoriteText"]);
const emits = defineEmits(["favoriteToggled"]);

const imageBasePath = "/assets";
const mainStore = useMainStore();

const getRecipeImageUrl = (imageName) => {
  return `${imageBasePath}/${imageName}`;
};

const filteredRecipes = computed(() => {
  return mainStore.filterFavorite(true);
});

const toggleFavorite = (recipe) => {
  mainStore.toggleFavorite(recipe);
};
</script>
<style></style>
