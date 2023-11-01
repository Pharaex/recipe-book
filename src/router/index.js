import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/Homepage.vue"),
  },

  {
    path: "/AddRecipe",
    name: "AddRecipe",
    component: () => import("@/views/AddRecipe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
