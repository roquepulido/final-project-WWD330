// model for recipelist
export interface RecipesListResponse {
  count: number;
  results: RecipeResult[];
}

export interface RecipeResult {
  approved_at: number;
  aspect_ratio: string;
  beauty_url?: string;
  brand: any;
  brand_id: any;
  buzz_id?: number;
  canonical_id: string;
  compilations: Compilation[];
  cook_time_minutes: number;
  country: string;
  created_at: number;
  credits: Credit[];
  description: string;
  draft_status: string;
  facebook_posts: any[];
  id: number;
  inspired_by_url?: string;
  instructions: Instruction[];
  is_app_only: boolean;
  is_one_top: boolean;
  is_shoppable: boolean;
  is_subscriber_content: boolean;
  keywords: string;
  language: string;
  name: string;
  num_servings: number;
  nutrition: Nutrition;
  nutrition_visibility: string;
  original_video_url: string;
  prep_time_minutes: number;
  price: Price;
  promotion: string;
  renditions: Rendition[];
  sections: Section[];
  seo_path: string;
  seo_title?: string;
  servings_noun_plural: string;
  servings_noun_singular: string;
  show: Show;
  show_id: number;
  slug: string;
  tags: Tag[];
  thumbnail_alt_text: string;
  thumbnail_url: string;
  tips_and_ratings_enabled: boolean;
  topics: Topic[];
  total_time_minutes: number;
  total_time_tier: TotalTimeTier;
  updated_at: number;
  user_ratings: UserRatings;
  video_ad_content: string;
  video_id: number;
  video_url: string;
  yields: string;
}

export interface Compilation {
  approved_at: number;
  aspect_ratio?: string;
  beauty_url?: string;
  buzz_id?: number;
  canonical_id: string;
  country: string;
  created_at: number;
  description?: string;
  draft_status: string;
  facebook_posts: any[];
  id: number;
  is_shoppable: boolean;
  keywords: any;
  language: string;
  name: string;
  promotion: string;
  show: Show[];
  slug: string;
  thumbnail_alt_text: string;
  thumbnail_url: string;
  video_id: number;
  video_url: string;
}

export interface Show {
  id: number;
  name: string;
}

export interface Credit {
  is_verified: boolean;
  name?: string;
  picture_url: string;
  type: string;
  user_id: any;
}

export interface Instruction {
  appliance?: string;
  display_text: string;
  end_time: number;
  id: number;
  position: number;
  start_time: number;
  temperature?: number;
  hacks?: Hack[];
}

export interface Nutrition {
  calories: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  protein: number;
  sugar: number;
  updated_at: string;
}

export interface Price {
  consumption_portion: number;
  consumption_total: number;
  portion: number;
  total: number;
  updated_at: string;
}

export interface Rendition {
  aspect: string;
  bit_rate?: number;
  container: string;
  content_type: string;
  duration: number;
  file_size?: number;
  height: number;
  maximum_bit_rate?: number;
  minimum_bit_rate?: number;
  name: string;
  poster_url: string;
  url: string;
  width: number;
}

export interface Section {
  components: Component[];
  name?: string;
  position: number;
}

export interface Component {
  extra_comment: string;
  id: number;
  ingredient: Ingredient;
  measurements: Measurement[];
  position: number;
  raw_text: string;
  hacks?: Hack[];
}

export interface Ingredient {
  created_at: number;
  display_plural: string;
  display_singular: string;
  id: number;
  name: string;
  updated_at: number;
}

export interface Measurement {
  id: number;
  quantity: string;
  unit: Unit;
}

export interface Unit {
  abbreviation: string;
  display_plural: string;
  display_singular: string;
  name: string;
  system: string;
}

export interface Hack {
  end_index: number;
  id: number;
  match: string;
  start_index: number;
}

export interface Tag {
  display_name: string;
  id: number;
  name: string;
  parent_tag_name?: string;
  root_tag_type: string;
  type: string;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface TotalTimeTier {
  display_tier: string;
  tier: string;
}

export interface UserRatings {
  count_negative: number;
  count_positive: number;
  score: number;
}
