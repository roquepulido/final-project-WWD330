import { AutoCompleteResponse } from "../model/ApiTasty/AutoCompleteResponse";
import { FeedListResponse } from "../model/ApiTasty/FeedListResponse";
import { RecipesGetMoreInfoResponse } from "../model/ApiTasty/RecipesGetMoreInfoResponse";
import { RecipesListResponse } from "../model/ApiTasty/RecipesListResponse";
import { RecipesListSimilaritiesResponse } from "../model/ApiTasty/RecipesListSimilaritiesResponse";
import { TagsListResponse } from "../model/ApiTasty/TagsListResponse";
import { TipsListResponse } from "../model/ApiTasty/TipsListResponse";
import { RequestService } from "./RequestService";

export class ApiTastyService {
  urlBase = "https://tasty.p.rapidapi.com";
  hostRapiapi = "tasty.p.rapidapi.com";
  apiKey = import.meta.env.VITE_RAPIAPI_KEY_TASTY;
  options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-host": this.hostRapiapi,
    },
  };
  constructor(private requestService: RequestService) {}

  /**
   * @param prefix Food name or ingredient
   */
  getAutoComplete(prefix: string): Promise<AutoCompleteResponse> {
    const url = `${
      this.urlBase
    }/recipes/auto-complete?prefix=${encodeURIComponent(prefix)}`;
    return this.requestService.get<AutoCompleteResponse>(url, this.options);
  }

  /**
   * @param query Name of food or, ingredients to search by
   * @param tags Get suitable values from /tags/list API
   * @param offset The offset of items to be ignored in response for paging
   * @param sizePage Number of items returned per response
   * @param sortDesc
   */
  getRecipesList(
    query: string = "",
    tags: string[] = [],
    offset: number = 0,
    sizePage: number = 10,
    sortDesc: boolean = false
  ): Promise<RecipesListResponse> {
    const url = `${
      this.urlBase
    }/recipes/list?from=${offset}&size=${sizePage}&tags=${tags.join(
      ","
    )}&q=${query}&sort=${sortDesc ? "desc" : "asc"}`;
    return this.requestService.get<RecipesListResponse>(url, this.options);
  }

  /**
   * @param recipeId The id value of any recipe returned in recipes/list API
   */
  getRecipesListSimilarities(
    recipeId: number
  ): Promise<RecipesListSimilaritiesResponse> {
    const url = `${this.urlBase}/recipes/list-similarities?recipe_id=${recipeId}`;
    return this.requestService.get<RecipesListSimilaritiesResponse>(
      url,
      this.options
    );
  }

  /**
   * @param recipeId The id value of any recipe returned in recipes/list API
   */
  getRecipesGetMoreInfo(recipeId: number): Promise<RecipesGetMoreInfoResponse> {
    const url = `${this.urlBase}/recipes/get-more-info?id=${recipeId}`;
    return this.requestService.get<RecipesGetMoreInfoResponse>(
      url,
      this.options
    );
  }

  /**
   * @param recipeId The value of recipe id returned in .../recipes/list .../feeds/list .../recipes/list-similarities endpoints
   * @param offset The offset of items to be ignored in response for paging
   * @param sizePage Number of items returned per response
   */
  getTipsList(
    recipeId: string,
    offset: number = 0,
    sizePage: number = 10
  ): Promise<TipsListResponse> {
    const url = `${this.urlBase}/tips/list?from=${offset}&size=${sizePage}&id=${recipeId}`;
    return this.requestService.get<TipsListResponse>(url, this.options);
  }

  getTagsList(): Promise<TagsListResponse> {
    const url = `${this.urlBase}/tags/list`;
    return this.requestService.get<TagsListResponse>(url, this.options);
  }

  /**
   * @param timeZone The timezone of your location in format of +/- hhmm
   * @param vegetarian List vegetarian food only
   * @param offset The offset of items to be ignored in response for paging
   * @param sizePage Number of items returned per response
   */
  getFeedsList(
    timeZone: string = "+0700",
    vegetarian: boolean = false,
    offset: number = 0,
    sizePage: number = 10
  ): Promise<FeedListResponse> {
    const url = `${
      this.urlBase
    }/feeds/list?size=${sizePage}&timezone=${encodeURIComponent(
      timeZone
    )}&vegetarian=${vegetarian.valueOf()}&from=${offset}`;
    return this.requestService.get<FeedListResponse>(url, this.options);
  }
}
