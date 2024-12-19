export interface RecipesListSimilaritiesResponse {
  count: number;
  results: ResultListSimilarities[];
}

export interface ResultListSimilarities {
  nutrition: Nutrition;
  description?: string;
  is_one_top: boolean;
  servings_noun_plural: string;
  video_ad_content?: string;
  beauty_url?: string;
  is_shoppable: boolean;
  nutrition_visibility: string;
  facebook_posts: any[];
  language: string;
  show_id: number;
  prep_time_minutes?: number;
  brand_id?: number;
  topics: Topic[];
  total_time_tier?: TotalTimeTier;
  instructions: Instruction[];
  slug: string;
  draft_status: string;
  credits: Credit[];
  cook_time_minutes?: number;
  id: number;
  sections: Section[];
  num_servings: number;
  thumbnail_url: string;
  video_url?: string;
  seo_title?: string;
  keywords?: string;
  user_ratings: UserRatings;
  compilations: Compilation[];
  buzz_id?: number;
  thumbnail_alt_text: string;
  renditions: Rendition[];
  promotion: string;
  brand?: Brand;
  aspect_ratio: string;
  show: Show;
  inspired_by_url?: string;
  total_time_minutes?: number;
  approved_at: number;
  tips_and_ratings_enabled: boolean;
  created_at: number;
  updated_at: number;
  yields: string;
  video_id?: number;
  country: string;
  servings_noun_singular: string;
  tags: Tag[];
  name: string;
  original_video_url?: string;
  canonical_id: string;
  similarity: number;
}

export interface Nutrition {
  carbohydrates?: number;
  fiber?: number;
  updated_at?: string;
  protein?: number;
  fat?: number;
  calories?: number;
  sugar?: number;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface TotalTimeTier {
  display_tier: string;
  tier: string;
}

export interface Instruction {
  appliance?: string;
  end_time: number;
  temperature?: number;
  id: number;
  position: number;
  display_text: string;
  start_time: number;
}

export interface Credit {
  name?: string;
  type: string;
  id?: number;
  slug?: string;
  image_url?: string;
}

export interface Section {
  components: Component[];
  name?: string;
  position: number;
}

export interface Component {
  ingredient: Ingredient;
  id: number;
  position: number;
  measurements: Measurement[];
  raw_text: string;
  extra_comment: string;
}

export interface Ingredient {
  display_singular: string;
  updated_at: number;
  name: string;
  created_at: number;
  display_plural: string;
  id: number;
}

export interface Measurement {
  unit: Unit;
  quantity: string;
  id: number;
}

export interface Unit {
  system: string;
  name: string;
  display_plural: string;
  display_singular: string;
  abbreviation: string;
}

export interface UserRatings {
  count_positive: number;
  score: number;
  count_negative: number;
}

export interface Compilation {
  buzz_id: any;
  country: string;
  keywords: any;
  description?: string;
  thumbnail_alt_text: string;
  canonical_id: string;
  id: number;
  facebook_posts: any[];
  show: Show[];
  created_at: number;
  slug: string;
  promotion: string;
  video_url: string;
  beauty_url?: string;
  video_id: number;
  name: string;
  aspect_ratio?: string;
  is_shoppable: boolean;
  draft_status: string;
  language: string;
  thumbnail_url: string;
  approved_at: number;
}

export interface Show {
  name: string;
  id: number;
}

export interface Rendition {
  container: string;
  file_size?: number;
  duration: number;
  width: number;
  height: number;
  minimum_bit_rate?: number;
  name: string;
  maximum_bit_rate?: number;
  poster_url: string;
  url: string;
  bit_rate?: number;
  content_type: string;
  aspect: string;
}

export interface Brand {
  image_url: string;
  name: string;
  id: number;
  slug: string;
}

export interface Tag {
  name: string;
  id: number;
  display_name: string;
  type: string;
}
