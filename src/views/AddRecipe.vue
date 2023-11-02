<template>
  <div>
    <form @submit.prevent="submitForm">
      <label
        >Title
        <input
          v-model="formData.title"
          type="text"
          name="title"
          placeholder="Title"
        />
      </label>
      <label
        >Description
        <input
          v-model="formData.description"
          type="text"
          name="description"
          placeholder="Description"
        />
      </label>
      <label v-for="(ingredient, index) in formData.ingredients" :key="index">
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
      </label>
      <button type="button" @click="addNewIngredient">Add Ingredient</button>
      <label
        >Instructions
        <input
          v-model="formData.instructions"
          type="text"
          name="instructions"
          placeholder="Instructions"
        />
      </label>
      <label
        >PrepTime
        <input
          v-model="formData.prepTime"
          @input="calculateTotalTime"
          type="text"
          name="prepTime"
          placeholder="PrepTime"
        />
        <span>min</span>
      </label>
      <label
        >CookTime
        <input
          v-model="formData.cookTime"
          @input="calculateTotalTime"
          type="text"
          name="cookTime"
          placeholder="CookTime"
        />
        <span>min</span>
      </label>

      <label
        >TotalTime
        <div v-if="formData.showTotalTime">
          <p>{{ formData.totalTime }} min</p>
        </div>
      </label>
      <label
        >Servings
        <input
          v-model="formData.servings"
          type="text"
          name="servings"
          placeholder="Servings"
        />
      </label>
      <label
        >Cuisine
        <input
          v-model="formData.cuisine"
          type="text"
          name="cuisine"
          placeholder="Cuisine"
        />
      </label>
      <label
        >Course
        <input
          v-model="formData.course"
          type="text"
          name="course"
          placeholder="Course"
        />
      </label>
      <label>Difficulty </label>
      <select name="difficulty" v-model="formData.difficulty">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <label
        >Tags
        <input
          v-model="formData.tags"
          type="text"
          name="tags"
          placeholder="Tags"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    <p>{{ formData.title }}</p>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
import { reactive, onMounted, watch, ref } from "vue";

const formData = reactive({
  title: "",
  description: "",
  ingredients: [{ name: "", quantity: "" }],
  instructions: "",
  prepTime: 0,
  cookTime: 0,
  totalTime: 0,
  servings: "",
  cuisine: "",
  course: "",
  difficulty: "",
  tags: "",
  showTotalTime: false,
});

const mainStore = useMainStore();

const submitForm = () => {
  mainStore.addUserRecipe(formData);
  resetFormData();
};

onMounted(() => {
  console.log("User Recipes in mainStore:", mainStore.userRecipes);
});

const resetFormData = () => {
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

watch(
  [() => formData.prepTime, () => formData.cookTime],
  ([newPrepTime, newCookTime]) => {
    const prep = parseInt(newPrepTime) || 0;
    const cook = parseInt(newCookTime) || 0;

    formData.totalTime = prep + cook; // Update the totalTime directly
    formData.showTotalTime = !isNaN(formData.totalTime);
  }
);
</script>
