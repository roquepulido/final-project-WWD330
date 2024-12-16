import { RecipeResult, Tag } from "./model/ApiTasty/RecipesListResponse";

export function example(title: string, description: string): string {
  return /*html*/ `
  <div class="item">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`;
}

export function recipeInfo(data: RecipeResult): string {
  return /*html*/ `
  <div class="card-result" id="recipe-${data.id}">
        <img  src="${data.thumbnail_url}" alt="${data.thumbnail_alt_text}" />
        <span class="recipe-name">${data.name}</span>
        <p class="recipe-description">${data.description}</p>
        <span class="recipe-servings"><b>Servings: </b>${
          data.num_servings
        }</span>
        <div class="tags">${data.tags
          .map((tag: Tag) => {
            return `<span>${tag.display_name}</span>`;
          })
          .join("")}
        </div>
        <div class="recipe-buttons">
          <button class="button">More Info</button>
          <button class="button">Add recipe</button>
        </div>
      </div>
  `;
}

export function modalRecipe(data: RecipeResult): string {
  return /*html*/ `
  <h1 class="modal-title">${data.name}</h1>
          <div>
            <img
              class="modal-image"
              src="${data.thumbnail_url}"
              alt="${data.thumbnail_alt_text}"
            />
            <div>
              <p class="modal-description">${data.description}</p>
            </div>
          </div>
          <div>
            <h2>Steps:</h2>
            <ol>
              ${data.instructions
                .map((step) => `<li>${step.display_text}</li>`)
                .join("")}
            </ol>
          </div>
      `;
}
