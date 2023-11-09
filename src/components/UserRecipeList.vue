<template>
  <div>
    <div v-for="recipe in userRecipes" :key="recipe.id">
      <p>{{ recipe.title }}</p>
      <p>{{ recipe.description }}</p>
      <button @click="toggleUserFavorite(recipe)">
        {{ recipe.favorite ? "⭐" : "☆" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
import { defineProps } from "vue";

const mainStore = useMainStore();
const props = defineProps({
  userRecipes: Array,
});

const toggleUserFavorite = (recipe) => {
  mainStore.toggleUserFavorite(recipe);
};
</script>
