<template>
  <div>
    <div>
      <button @click="applyFilterFav">Show Favorites Only</button>
      <button @click="clearFilterFav">Remove Filter</button>
    </div>
    <RecipeList :recipes="filteredRecipes" />
    <UserRecipeList :userRecipes="userRecipes" />
  </div>
</template>

<script setup>
import RecipeList from "@/components/RecipeList.vue";
import UserRecipeList from "@/components/UserRecipeList.vue";
import { useMainStore } from "@/stores/mainStore";
import { computed, ref, watch } from "vue";

const mainStore = useMainStore();
const filterTerm = ref(false);

const filteredRecipes = computed(() => {
  return filterTerm.value
    ? mainStore.filterFavorite(filterTerm.value)
    : mainStore.recipes;
});

const applyFilterFav = () => {
  filterTerm.value = true; // Set filterTerm to true when filtering
};

const clearFilterFav = () => {
  filterTerm.value = false; // Set filterTerm to false when clearing the filter
};

watch(
  () => mainStore.recipes.map((recipe) => recipe.favorite),
  (favorites) => {
    const atLeastOneFavorite = favorites.some((favorite) => favorite);

    if (!atLeastOneFavorite) {
      filterTerm.value = false;
    }
  }
);

const userRecipes = computed(() => mainStore.userRecipes);
</script>
