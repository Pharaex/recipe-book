<template>
  <div>
    <button @click="applyFilterFav">Show Favorites Only</button>
    <button @click="clearFilterFav">Remove Filter</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const filterFav = ref("");
const favoriteText = defineProps(["favoriteText"]);
const emits = defineEmits(["applyFilterFav"]);

const applyFilterFav = () => {
  emits("applyFilterFav", filterFav.value); // Emit the filterFav value
};

const clearFilterFav = () => {
  filterFav.value = "";
  emits("applyFilterFav", filterFav.value);
};
</script>
