import { getLocalStorage, setClick, setLocalStorage } from "./util";

setClick("#mealPlannerButton", () => {
  window.location.href = "./meal-planner.html";
});

setClick("#findRecipeButton", () => {
  window.location.href = "./find-recipe.html";
});

/* Init LocalStorage */
if (getLocalStorage("recipes") == null) {
  setLocalStorage("recipes", []);
}
