// model for autocomplete request
export interface AutoCompleteResponse {
  results: IngredientSearch[];
}

export interface IngredientSearch {
  display: string;
  search_value: string;
  type: string;
}
