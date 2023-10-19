import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("recipes", () => {
  const recipes = ref([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish",
      ingredients: [
        {
          name: "Spaghetti",
          quantity: "200g",
        },
        {
          name: "Pancetta",
          quantity: "100g",
        },
        // Add more ingredients as needed
      ],
      instructions: [
        "Boil water in a large pot.",
        "Fry pancetta in a pan until crispy.",
        "Cook spaghetti in boiling water until al dente.",
        "In a bowl, mix eggs, cheese, and pepper.",
        "Drain spaghetti and add it to the egg mixture.",
        "Stir in pancetta and serve immediately.",
      ],
      prepTime: "15 minutes",
      cookTime: "15 minutes",
      totalTime: "30 minutes",
      servings: 2,
      cuisine: "Italian",
      course: "Main Course",
      difficulty: "Intermediate",
      image: "spaghetti_carbonara.jpg",
      tags: ["pasta", "italian", "carbonara"],
      favorite: false,
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      description: "Creamy and delicious pasta with chicken",
      ingredients: [
        {
          name: "Chicken Breasts",
          quantity: "2",
        },
        {
          name: "Fettuccine",
          quantity: "8 oz",
        },
        // Add more ingredients as needed
      ],
      instructions: [
        "Season chicken with salt and pepper.",
        "Cook chicken in a pan until browned and cooked through.",
        "Boil fettuccine in salted water until al dente.",
        "In a saucepan, melt butter and add cream and Parmesan cheese.",
        "Simmer until the sauce thickens.",
        "Slice the cooked chicken and serve it over the fettuccine with the sauce.",
      ],
      prepTime: "20 minutes",
      cookTime: "20 minutes",
      totalTime: "40 minutes",
      servings: 4,
      cuisine: "Italian",
      course: "Main Course",
      difficulty: "Intermediate",
      image: "chicken_alfredo.jpg",
      tags: ["pasta", "italian", "alfredo"],
      favorite: false,
    },
    {
      id: 3,
      title: "Homemade Pizza",
      description: "Make your own delicious pizza at home",
      ingredients: [
        {
          name: "Pizza Dough",
          quantity: "1 ball",
        },
        {
          name: "Pizza Sauce",
          quantity: "1/2 cup",
        },
        // Add more ingredients as needed
      ],
      instructions: [
        "Preheat your oven to the highest temperature.",
        "Roll out the pizza dough into your desired shape.",
        "Spread pizza sauce over the dough and add toppings.",
        "Bake in the preheated oven for 10-12 minutes or until golden and bubbly.",
        "Slice and enjoy your homemade pizza!",
      ],
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      totalTime: "25 minutes",
      servings: 4,
      cuisine: "Italian",
      course: "Main Course",
      difficulty: "Beginner",
      image: "homemade_pizza.jpg",
      tags: ["pizza", "italian", "homemade"],
      favorite: false,
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      description: "Classic homemade chocolate chip cookies",
      ingredients: [
        {
          name: "All-Purpose Flour",
          quantity: "2 1/4 cups",
        },
        {
          name: "Chocolate Chips",
          quantity: "2 cups",
        },
        // Add more ingredients as needed
      ],
      instructions: [
        "Preheat your oven to 350°F (175°C).",
        "In a bowl, cream together butter and sugars until smooth.",
        "Beat in the eggs one at a time, then stir in the vanilla.",
        "Gradually add the dry ingredients and chocolate chips.",
        "Drop by rounded tablespoons onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until the edges are lightly golden.",
      ],
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      totalTime: "25 minutes",
      servings: 24,
      cuisine: "American",
      course: "Dessert",
      difficulty: "Beginner",
      image: "chocolate_chip_cookies.jpg",
      tags: ["cookies", "dessert", "chocolate"],
      favorite: false,
    },
    {
      id: 5,
      title: "Chicken Stir-Fry",
      description: "Quick and healthy chicken stir-fry",
      ingredients: [
        {
          name: "Chicken Breast",
          quantity: "2",
        },
        {
          name: "Mixed Vegetables",
          quantity: "2 cups",
        },
        // Add more ingredients as needed
      ],
      instructions: [
        "Cut chicken into bite-sized pieces and stir-fry until cooked.",
        "Add mixed vegetables and stir-fry for a few minutes.",
        "In a small bowl, mix soy sauce, honey, and ginger.",
        "Pour the sauce over the chicken and vegetables.",
        "Serve hot with rice or noodles.",
      ],
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      totalTime: "25 minutes",
      servings: 4,
      cuisine: "Asian",
      course: "Main Course",
      difficulty: "Easy",
      image: "chicken_stir_fry.jpg",
      tags: ["stir-fry", "chicken", "healthy"],
      favorite: false,
    },
  ]);

  return { recipes };
});
