<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="title">Title</label>
      <input
        v-model="formData.title"
        type="text"
        name="title"
        placeholder="Title"
      />
      <label for="description">Description</label>
      <input
        v-model="formData.description"
        type="text"
        name="description"
        placeholder="Description"
      />
      <label for="ingredients">Ingredients</label>
      <div v-for="(ingredient, index) in formData.ingredients" :key="index">
        <input
          v-model="ingredient.name"
          type="text"
          :name="'ingredient-name-' + index"
          :placeholder="'Ingredient ' + (index + 1) + ' Name'"
        />
        <input
          v-model="ingredient.quantity"
          type="text"
          :name="'ingredient-quantity-' + index"
          :placeholder="'Quantity ' + (index + 1)"
        />
        <button type="button" @click="removeIngredient(index)">Remove</button>
      </div>
      <button type="button" @click="addNewIngredient">Add Ingredient</button>
      <label for="instructions">Instructions</label>
      <input
        v-model="formData.instructions"
        type="text"
        name="instructions"
        placeholder="Instructions"
      />
      <label for="prepTime">PrepTime</label>
      <input
        v-model="formData.prepTime"
        type="text"
        name="prepTime"
        placeholder="PrepTime"
      />
      <label for="cookTime">CookTime</label>
      <input
        v-model="formData.cookTime"
        type="text"
        name="cookTime"
        placeholder="CookTime"
      />
      <label for="totalTime">TotalTime</label>
      <input
        v-model="formData.totalTime"
        type="text"
        name="totalTime"
        placeholder="TotalTime"
      />
      <label for="servings">Servings</label>
      <input
        v-model="formData.servings"
        type="number"
        name="servings"
        placeholder="Servings"
      />
      <label for="cuisine">Cuisine</label>
      <input
        v-model="formData.cuisine"
        type="text"
        name="cuisine"
        placeholder="Cuisine"
      />
      <label for="course">Course</label>
      <input
        v-model="formData.course"
        type="text"
        name="course"
        placeholder="Course"
      />
      <label for="difficulty">Difficulty</label>
      <input
        v-model="formData.difficulty"
        type="text"
        name="difficulty"
        placeholder="Difficulty"
      />
      <label for="tags">Tags</label>
      <input
        v-model="formData.tags"
        type="text"
        name="tags"
        placeholder="Tags"
      />

      <button type="submit">Submit</button>
    </form>
    <p>{{ formData.title }}</p>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
import { reactive } from "vue";

const formData = reactive({
  title: "",
  description: "",
  ingredients: [{ name: "", quantity: "" }],
  instructions: "",
  prepTime: "",
  cookTime: "",
  totalTime: "",
  servings: "",
  cuisine: "",
  course: "",
  difficulty: "",
  tags: "",
});

const mainStore = useMainStore();

const submitForm = () => {
  mainStore.addUserRecipe(formData); // Pass the form data to addUserRecipe method
  console.log("User Recipes in mainStore:", mainStore.userRecipes.value);
  resetFormData(); // Reset form data after submission
};

const resetFormData = () => {
  // Reset form data after submission
  for (const key in formData) {
    if (Array.isArray(formData[key])) {
      formData[key] = [];
    } else {
      formData[key] = "";
    }
  }
};

const addNewIngredient = () => {
  formData.ingredients.push({ name: "", quantity: "" });
};

const removeIngredient = (index) => {
  formData.ingredients.splice(index, 1);
};
</script>
