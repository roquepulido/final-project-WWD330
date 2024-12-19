import {
  RecipeResult,
  RecipesListResponse,
} from "./model/ApiTasty/RecipesListResponse";
import { appendLocalStorage, setClick, showNotification } from "./util";
import { modalRecipe, recipeInfo } from "./templates";
import { getRecipesList } from "./service/ApiTastyService";

let offset = 0;
let isLoading = false;
const sizePage = 20;

function toggleScroll(disabled: boolean): void {
  const scrollContainer = document.getElementById("scroll-container");
  if (scrollContainer) {
    scrollContainer.classList.toggle("no-scroll", disabled);
  }
}

function toggleSpinner(show: boolean): void {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.classList.toggle("hidden", !show);
  }
}

/** Load recipes */
async function loadRecipes(query: string, tags: string[] = []): Promise<void> {
  const container = document.getElementById("resultRecipes");
  if (!container || isLoading) return;

  isLoading = true;
  toggleSpinner(true);
  toggleScroll(true);

  try {
    const data: RecipesListResponse = await getRecipesList(
      query,
      tags,
      offset,
      sizePage
    );
    if (data.count != 0) {
      const newRecipes = data.results.map(recipeInfo).join("");
      container.insertAdjacentHTML("beforeend", newRecipes);

      data.results.forEach((recipe) => {
        const recipeCard = document.getElementById(`recipe-${recipe.id}`);
        if (recipeCard) {
          const moreInfoButton = recipeCard.querySelector<HTMLButtonElement>(
            ".recipe-buttons .button:first-child"
          );
          const addRecipeButton = recipeCard.querySelector<HTMLButtonElement>(
            ".recipe-buttons .button:last-child"
          );

          moreInfoButton?.addEventListener("click", () => {
            openModal(recipe);
          });

          addRecipeButton?.addEventListener("click", () => {
            appendLocalStorage<RecipeResult>("recipes", recipe);
            showNotification(`Added Recipe: ${recipe.name}`);
          });
        }
      });

      offset += sizePage;
    } else {
      const newMsg = `<h1>No recipes finded with word: ${query}... Try with other word 😁</h1>`;
      container.insertAdjacentHTML("beforeend", newMsg);
    }
  } catch (error) {
    console.error("Error loading recipes:", error);
  } finally {
    toggleSpinner(false);
    isLoading = false;
    toggleScroll(false);
  }
}

function setupInfiniteScroll(query: string, tags: string[] = []) {
  const scrollContainer = document.getElementById("scroll-container");
  if (!scrollContainer) return;

  scrollContainer.addEventListener("scroll", async () => {
    if (
      scrollContainer.scrollTop + scrollContainer.clientHeight >=
      scrollContainer.scrollHeight - 1200
    ) {
      if (!isLoading) {
        await loadRecipes(query, tags);
      }
    }
  });
}

setClick("#findRecipeFind button", async () => {
  (async () => {
    const recipe = document.querySelector(
      "#findRecipeFind input"
    ) as HTMLInputElement;
    if (recipe) {
      (document.getElementById("resultRecipes") as HTMLElement).innerHTML = "";
      offset = 0;
      await loadRecipes(recipe.value);
      setupInfiniteScroll(recipe.value);
    }
  })();
});

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

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("modal") as HTMLElement;
  modal.style.display = "none";
}

// Añadir el event listener para el botón de cierre del modal
document.getElementById("modal-close")?.addEventListener("click", closeModal);
