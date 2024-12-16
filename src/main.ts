import { setClick } from "./util";

setClick("#mealPlannerButton", () => {
  window.location.href = "./meal-planner.html";
});

setClick("#findRecipeButton", () => {
  window.location.href = "./find-recipe.html";
});
