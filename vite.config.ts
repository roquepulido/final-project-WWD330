import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        mealPlanner: "meal-planner.html",
        findRecipe: "find-recipe.html",
      },
    },
  },
});
