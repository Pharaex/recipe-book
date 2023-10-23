<template>
  <div>
    <RecipeList :recipes="mainStore.recipes" />
  </div>
</template>

<script setup>
import RecipeList from "@/components/RecipeList.vue";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();
</script>
