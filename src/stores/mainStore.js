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
        {
          name: "Eggs",
          quantity: "2",
        },
        {
          name: "Parmesan Cheese",
          quantity: "1/2 cup",
        },
        {
          name: "Black Pepper",
          quantity: "1/2 teaspoon",
        },
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
      image: "Spaghetti-Carbonara.jpg",
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
        {
          name: "Butter",
          quantity: "4 tablespoons",
        },
        {
          name: "Heavy Cream",
          quantity: "1 cup",
        },
        {
          name: "Parmesan Cheese",
          quantity: "1/2 cup",
        },
        {
          name: "Salt",
          quantity: "1/2 teaspoon",
        },
        {
          name: "Black Pepper",
          quantity: "1/4 teaspoon",
        },
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
      image: "chicken-Alfredo.jpg",
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
        {
          name: "Mozzarella Cheese",
          quantity: "2 cups, shredded",
        },
        {
          name: "Toppings (e.g., pepperoni, bell peppers, mushrooms)",
          quantity: "As needed",
        },
        {
          name: "Olive Oil",
          quantity: "2 tablespoons",
        },
        {
          name: "Salt",
          quantity: "1/2 teaspoon",
        },
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
      image: "Homemade-Pizza.jpg",
      tags: ["pizza", "italian", "homemade"],
      favorite: false,
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      description: "Mouth-melting buttery cookies like grandma used to make!",
      ingredients: [
        {
          name: "All-Purpose Flour",
          quantity: "2 1/4 cups",
        },
        {
          name: "Chocolate Chips",
          quantity: "2 cups",
        },
        {
          name: "Butter",
          quantity: "1 cup, softened",
        },
        {
          name: "Granulated Sugar",
          quantity: "3/4 cup",
        },
        {
          name: "Brown Sugar",
          quantity: "3/4 cup",
        },
        {
          name: "Eggs",
          quantity: "2",
        },
        {
          name: "Vanilla Extract",
          quantity: "1 teaspoon",
        },
        {
          name: "Baking Soda",
          quantity: "1 teaspoon",
        },
        {
          name: "Salt",
          quantity: "1/2 teaspoon",
        },
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
      image: "chocolate-chip-cookies.jpg",
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
        {
          name: "Soy Sauce",
          quantity: "2 tablespoons",
        },
        {
          name: "Honey",
          quantity: "2 tablespoons",
        },
        {
          name: "Fresh Ginger",
          quantity: "1 teaspoon, minced",
        },
        {
          name: "Garlic",
          quantity: "2 cloves, minced",
        },
        {
          name: "Cooking Oil",
          quantity: "2 tablespoons",
        },
        {
          name: "Rice or Noodles",
          quantity: "As needed (for serving)",
        },
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
      image: "Chicken-Stir-Fry.jpg",
      tags: ["stir-fry", "chicken", "healthy"],
      favorite: false,
    },
  ]);

  const favoriteText = ref(false);

  const toggleFavorite = (recipe) => {
    const index = recipes.value.findIndex((c) => c.id === recipe.id);
    if (index !== -1) {
      recipes.value[index].favorite = !recipes.value[index].favorite;
    }
  };

  const filterFavorite = (showFavorites) => {
    return recipes.value.filter((recipe) =>
      showFavorites ? recipe.favorite : true
    );
  };

  const userRecipes = ref([]);

  const addUserRecipe = (formData) => {
    const newRecipe = {
      id: 1000 + userRecipes.value.length + 1,
      origin: "user",
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      prepTime: formData.prepTime,
      cookTime: formData.cookTime,
      totalTime: formData.totalTime,
      servings: formData.servings,
      cuisine: formData.cuisine,
      course: formData.course,
      difficulty: formData.difficulty,
      tags: formData.tags,
      favorite: false,
      image: "",
    };

    userRecipes.value.push(newRecipe); // Add the new user recipe to the userRecipes array
  };

  return {
    recipes,
    toggleFavorite,
    filterFavorite,
    favoriteText,
    addUserRecipe,
    userRecipes,
  };
});
