import { RecipeResult } from "./model/ApiTasty/RecipesListResponse";
import { modalRecipe, recipeInfo } from "./templates";
import {
  exportJSON,
  getLocalStorage,
  importJSON,
  removeRecipeLocalStorage,
  setClick,
  setLocalStorage,
  showNotification,
} from "./util";

// Función para abrir el modal con la información del recipe
function openModal(recipe: RecipeResult) {
  // Mostrar el modal
  const modal = document.getElementById("modal") as HTMLElement;
  modal.style.display = "block";
  const modalInfo = document.querySelector("#modal .modal-info");
  if (modalInfo) {
    // Rellenar el contenido del modal con la información del recipe
    modalInfo.innerHTML = modalRecipe(recipe);
  }
}

/** Load recipes */
function loadRecipes(): void {
  const container = document.getElementById("resultRecipes");
  if (!container) return;
  container.innerHTML = "";

  // Get recipes from LocalStorage
  const data: RecipeResult[] = getLocalStorage("recipes");

  if (data.length > 0) {
    // render recipes
    container.innerHTML += data.map(recipeInfo).join("");

    // Set eventlistener
    data.forEach((recipe) => {
      const recipeCard = document.getElementById(`recipe-${recipe.id}`);
      if (recipeCard) {
        const moreInfoButton = recipeCard.querySelector<HTMLButtonElement>(
          ".recipe-buttons .button:first-child"
        );
        const removeRecipeButton = recipeCard.querySelector<HTMLButtonElement>(
          ".recipe-buttons .button:last-child"
        );

        if (removeRecipeButton) {
          removeRecipeButton.textContent = "Remove recipe";
        }

        moreInfoButton?.addEventListener("click", () => {
          openModal(recipe);
        });

        removeRecipeButton?.addEventListener("click", (event) => {
          const target = event.target as HTMLElement;
          const recipeCardParent =
            target.parentElement?.closest(".card-result");
          //animation delete
          recipeCardParent?.classList.add("shrink");
          // Remove Recepie from localStorage
          recipeCardParent?.addEventListener(
            "transitionend",
            () => {
              removeRecipeLocalStorage(recipe.id);
              loadRecipes();
              showNotification(`Removed Recipe: ${recipe.name}`);
            },
            { once: true }
          );
        });
      }
    });
  } else {
    container.innerHTML = /*html*/ `
    <h1>No recipes Added</h1>
    `;
  }
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("modal") as HTMLElement;
  modal.style.display = "none";
}

// Añadir el event listener para el botón de cierre del modal
setClick("#modal-close", closeModal);
setClick("#downloadFile", () => {
  const data: string | null = localStorage.getItem("recipes");
  if (data) {
    exportJSON(data);
  } else {
    showNotification("Error exporting recipes", "error");
  }
});
setClick("#uploadFile", async () => {
  const data = await importJSON<RecipeResult[]>()
    .then((data) => {
      if (data) {
        setLocalStorage("recipes", data);
      } else {
        showNotification("No file selected", "error");
      }
    })
    .catch((error) => showNotification(error, "error"));

  loadRecipes();
});
loadRecipes();
