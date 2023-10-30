<template>
  <div>
    <div>
      <button @click="applyFilterFav">Show Favorites Only</button>
      <button @click="clearFilterFav">Remove Filter</button>
    </div>
    <RecipeList
      :recipes="filteredRecipes"
      @favorite-toggled="handleFavoriteToggled"
    />
  </div>
</template>

<script setup>
import RecipeList from "@/components/RecipeList.vue";
import { useMainStore } from "@/stores/mainStore";
import { computed, ref } from "vue";

const mainStore = useMainStore();
const filterTerm = ref("");

const filteredRecipes = computed(() => {
  return filterTerm.value
    ? mainStore.filterFavorite(filterTerm.value)
    : mainStore.recipes;
}, [mainStore.recipes]);

const applyFilterFav = () => {
  filterTerm.value = true; // Set filterTerm to true when filtering
};

const clearFilterFav = () => {
  filterTerm.value = false; // Set filterTerm to false when clearing the filter
};

const handleFavoriteToggled = (recipe) => {
  mainStore.toggleFavorite(recipe);

  const allNotFavorited = mainStore.recipes.value.every(
    (recipe) => !recipe.favorite
  );

  if (allNotFavorited) {
    filterTerm.value = false;
  } else {
    filterTerm.value = !filterTerm.value;
  }
};
</script>
