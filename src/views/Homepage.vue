<template>
  <div>
    <FilterFavorite @applyFilterFav="filteredFavorite" />
    <RecipeList :recipes="filteredRecipes" />
  </div>
</template>

<script setup>
import RecipeList from "@/components/RecipeList.vue";
import FilterFavorite from "@/components/FilterFavorite.vue";
import { useMainStore } from "@/stores/mainStore";
import { computed, ref } from "vue";

const mainStore = useMainStore();
const filterTerm = ref(""); // Rename this variable to 'filterTerm'

const filteredRecipes = computed(() => {
  return filterTerm.value
    ? mainStore.filterFavorite(filterTerm.value)
    : mainStore.recipes;
});

const filteredFavorite = (showFavorites) => {
  filterTerm.value = showFavorites; // Update filterTerm based on user interaction
};
</script>
