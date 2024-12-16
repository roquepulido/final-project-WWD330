import { AutoCompleteResponse } from "../model/ApiTasty/AutoCompleteResponse";
import { FeedListResponse } from "../model/ApiTasty/FeedListResponse";
import { RecipesGetMoreInfoResponse } from "../model/ApiTasty/RecipesGetMoreInfoResponse";
import { RecipesListResponse } from "../model/ApiTasty/RecipesListResponse";
import { RecipesListSimilaritiesResponse } from "../model/ApiTasty/RecipesListSimilaritiesResponse";
import { TagsListResponse } from "../model/ApiTasty/TagsListResponse";
import { TipsListResponse } from "../model/ApiTasty/TipsListResponse";
import { RequestService } from "./RequestService";

const urlBase: string = "https://tasty.p.rapidapi.com";
const hostRapiapi: string = "tasty.p.rapidapi.com";
const apiKey: string = import.meta.env.VITE_RAPIAPI_KEY_TASTY;
const options: any = {
  method: "GET",
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": hostRapiapi,
  },
};
const requestService: RequestService = new RequestService();

/**
 * @param prefix Food name or ingredient
 */
export function getAutoComplete(prefix: string): Promise<AutoCompleteResponse> {
  const url = `${urlBase}/recipes/auto-complete?prefix=${encodeURIComponent(
    prefix
  )}`;
  return requestService.get<AutoCompleteResponse>(url, options);
}

/**
 * @param query Name of food or, ingredients to search by
 * @param tags Get suitable values from /tags/list API
 * @param offset The offset of items to be ignored in response for paging
 * @param sizePage Number of items returned per response
 * @param sortDesc
 */
export function getRecipesList(
  query: string = "",
  tags: string[] = [],
  offset: number = 0,
  sizePage: number = 10,
  sortDesc: boolean = false
): Promise<RecipesListResponse> {
  const url = `${urlBase}/recipes/list?from=${offset}&size=${sizePage}&tags=${tags.join(
    ","
  )}&q=${query}&sort=${sortDesc ? "desc" : "asc"}`;
  return requestService.get<RecipesListResponse>(url, options);
}

/**
 * @param recipeId The id value of any recipe returned in recipes/list API
 */
export function getRecipesListSimilarities(
  recipeId: number
): Promise<RecipesListSimilaritiesResponse> {
  const url = `${urlBase}/recipes/list-similarities?recipe_id=${recipeId}`;
  return requestService.get<RecipesListSimilaritiesResponse>(url, options);
}

/**
 * @param recipeId The id value of any recipe returned in recipes/list API
 */
export function getRecipesGetMoreInfo(
  recipeId: number
): Promise<RecipesGetMoreInfoResponse> {
  const url = `${urlBase}/recipes/get-more-info?id=${recipeId}`;
  return requestService.get<RecipesGetMoreInfoResponse>(url, options);
}

/**
 * @param recipeId The value of recipe id returned in .../recipes/list .../feeds/list .../recipes/list-similarities endpoints
 * @param offset The offset of items to be ignored in response for paging
 * @param sizePage Number of items returned per response
 */
export function getTipsList(
  recipeId: string,
  offset: number = 0,
  sizePage: number = 10
): Promise<TipsListResponse> {
  const url = `${urlBase}/tips/list?from=${offset}&size=${sizePage}&id=${recipeId}`;
  return requestService.get<TipsListResponse>(url, options);
}

export function getTagsList(): Promise<TagsListResponse> {
  const url = `${urlBase}/tags/list`;
  return requestService.get<TagsListResponse>(url, options);
}

/**
 * @param timeZone The timezone of your location in format of +/- hhmm
 * @param vegetarian List vegetarian food only
 * @param offset The offset of items to be ignored in response for paging
 * @param sizePage Number of items returned per response
 */
export function getFeedsList(
  timeZone: string = "+0700",
  vegetarian: boolean = false,
  offset: number = 0,
  sizePage: number = 10
): Promise<FeedListResponse> {
  const url = `${urlBase}/feeds/list?size=${sizePage}&timezone=${encodeURIComponent(
    timeZone
  )}&vegetarian=${vegetarian.valueOf()}&from=${offset}`;
  return requestService.get<FeedListResponse>(url, options);
}
