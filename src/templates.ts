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
          <div class="modal-img-description">
            <img
              class="modal-image"
              src="${data.thumbnail_url}"
              alt="${data.thumbnail_alt_text}"
            />
            <div class="modal-desc-ingred">
              <p class="modal-description">${data.description}</p>
              <h3>Ingredients</h3>
              <ul>
              ${data.sections[0].components
                .map((com) => {
                  return /*html*/ `
                <li>${com.ingredient.display_plural} - ${
                    com.measurements[0].quantity == "0"
                      ? "as desired"
                      : `${com.measurements[0].quantity} ${com.measurements[0].unit.display_plural}`
                  }</li>
                `;
                })
                .join("")}
              </ul>
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
