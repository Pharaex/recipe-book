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
const favoriteText = ref(false);

const filteredRecipes = computed(() => {
  return favoriteText.value
    ? mainStore.filterFavorite(favoriteText.value)
    : mainStore.recipes;
});

const filteredFavorite = (showFavorites) => {
  favoriteText.value = showFavorites;
};
</script>
