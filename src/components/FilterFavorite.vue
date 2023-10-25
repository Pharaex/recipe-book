<template>
  <div>
    <button @click="applyFilterFav">Show Favorites Only</button>
    <button @click="clearFilterFav">Remove Filter</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const filterTerm = ref(""); // Use the same name 'filterTerm'

const emits = defineEmits(["applyFilterFav"]);

const applyFilterFav = () => {
  filterTerm.value = true; // Set filterTerm to true when filtering
  emits("applyFilterFav", filterTerm.value);
};

const clearFilterFav = () => {
  filterTerm.value = false; // Set filterTerm to false when clearing the filter
  emits("applyFilterFav", filterTerm.value);
};
</script>
