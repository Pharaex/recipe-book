<template>
  <div>
    <button @click="applyFilterFav">Show Favorites Only</button>
    <button @click="clearFilterFav">Remove Filter</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";

const filterFav = ref("");

const favoriteText = defineProps(["favoriteText"]);
const emits = defineEmits(["applyFilterFav"]);

const applyFilterFav = () => {
  emits("applyFilterFav", filterFav.value);
};

const clearFilterFav = () => {
  filterFav.value = ""; // Use .value to update ref
  emits("applyFilterFav", filterFav.value);
};
</script>
