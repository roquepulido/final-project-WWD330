export interface FeedListResponse {
  results: FeedList[];
}

export interface FeedList {
  type: string;
  item?: Item;
  name?: string;
  min_items?: number;
  items?: Item2[];
  category?: string;
}

export interface Item {
  nutrition_visibility?: string;
  country: string;
  instructions?: Instruction[];
  keywords?: string;
  facebook_posts: any[];
  language: string;
  seo_path?: string;
  user_ratings?: UserRatings;
  price?: Price;
  id: number;
  brand?: Brand;
  slug: string;
  servings_noun_singular?: string;
  show_id: number;
  prep_time_minutes?: number;
  is_subscriber_content?: boolean;
  sections?: Section[];
  brand_id?: number;
  tags: Tag[];
  nutrition?: Nutrition;
  is_app_only?: boolean;
  name: string;
  compilations?: Compilation[];
  num_servings?: number;
  buzz_id: any;
  tips_and_ratings_enabled?: boolean;
  aspect_ratio: string;
  show: Show2;
  created_at: number;
  description: string;
  draft_status: string;
  inspired_by_url: any;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  total_time_minutes?: number;
  video_url: string;
  updated_at: number;
  credits: Credit[];
  approved_at: number;
  is_one_top?: boolean;
  servings_noun_plural?: string;
  renditions: Rendition[];
  beauty_url: any;
  is_shoppable: boolean;
  topics?: Topic[];
  total_time_tier?: TotalTimeTier;
  video_ad_content?: string;
  seo_title?: string;
  yields?: string;
  original_video_url?: string;
  canonical_id: string;
  cook_time_minutes?: number;
  promotion: string;
  video_id: number;
  recipes?: Recipe[];
}

export interface Instruction {
  start_time: number;
  appliance: any;
  end_time: number;
  temperature: any;
  id: number;
  position: number;
  display_text: string;
  hacks?: Hack[];
}

export interface Hack {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface UserRatings {
  count_positive: number;
  score: number;
  count_negative: number;
}

export interface Price {
  total: number;
  updated_at: string;
  portion: number;
  consumption_total: number;
  consumption_portion: number;
}

export interface Brand {
  image_url: string;
  name: string;
  id: number;
  slug: string;
}

export interface Section {
  components: Component[];
  name?: string;
  position: number;
}

export interface Component {
  raw_text: string;
  extra_comment: string;
  ingredient: Ingredient;
  hacks?: Hack2[];
  id: number;
  position: number;
  measurements: Measurement[];
}

export interface Ingredient {
  updated_at: number;
  name: string;
  created_at: number;
  display_plural: string;
  id: number;
  display_singular: string;
}

export interface Hack2 {
  start_index: number;
  match: string;
  end_index: number;
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

export interface Tag {
  root_tag_type: string;
  name: string;
  id: number;
  parent_tag_name?: string;
  display_name: string;
  type: string;
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

export interface Compilation {
  aspect_ratio: string;
  country: string;
  is_shoppable: boolean;
  keywords: any;
  facebook_posts: any[];
  show: Show[];
  created_at: number;
  description: any;
  draft_status: string;
  language: string;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  video_url: string;
  approved_at: number;
  name: string;
  canonical_id: string;
  id: number;
  beauty_url: any;
  buzz_id: any;
  slug: string;
  promotion: string;
  video_id: number;
}

export interface Show {
  name: string;
  id: number;
}

export interface Show2 {
  name: string;
  id: number;
}

export interface Credit {
  image_url?: string;
  name?: string;
  id?: number;
  type: string;
  slug?: string;
  picture_url?: string;
  user_id?: number;
  is_verified?: boolean;
}

export interface Rendition {
  container: string;
  poster_url: string;
  file_size?: number;
  url: string;
  duration: number;
  bit_rate?: number;
  content_type: string;
  aspect: string;
  width: number;
  minimum_bit_rate?: number;
  name: string;
  maximum_bit_rate?: number;
  height: number;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface TotalTimeTier {
  tier: string;
  display_tier: string;
}

export interface Recipe {
  nutrition_visibility: string;
  country: string;
  instructions: Instruction2[];
  keywords?: string;
  facebook_posts: any[];
  language: string;
  seo_path: string;
  user_ratings: UserRatings2;
  price: Price2;
  id: number;
  brand: any;
  slug: string;
  servings_noun_singular: string;
  show_id: number;
  prep_time_minutes: number;
  is_subscriber_content: boolean;
  sections: Section2[];
  brand_id: any;
  tags: Tag2[];
  nutrition: Nutrition2;
  is_app_only: boolean;
  name: string;
  compilations: Compilation2[];
  num_servings: number;
  buzz_id: any;
  tips_and_ratings_enabled: boolean;
  aspect_ratio: string;
  show: Show4;
  created_at: number;
  description: string;
  draft_status: string;
  inspired_by_url: any;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  total_time_minutes: number;
  video_url?: string;
  updated_at: number;
  credits: Credit2[];
  approved_at: number;
  is_one_top: boolean;
  servings_noun_plural: string;
  renditions: Rendition2[];
  beauty_url: any;
  is_shoppable: boolean;
  topics: Topic2[];
  total_time_tier?: TotalTimeTier2;
  video_ad_content?: string;
  seo_title?: string;
  yields: string;
  original_video_url?: string;
  canonical_id: string;
  cook_time_minutes: number;
  promotion: string;
  video_id?: number;
}

export interface Instruction2 {
  start_time: number;
  appliance?: string;
  end_time: number;
  temperature?: number;
  id: number;
  position: number;
  display_text: string;
  hacks?: Hack3[];
}

export interface Hack3 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface UserRatings2 {
  count_positive: number;
  score: number;
  count_negative: number;
}

export interface Price2 {
  total: number;
  updated_at: string;
  portion: number;
  consumption_total: number;
  consumption_portion: number;
}

export interface Section2 {
  components: Component2[];
  name?: string;
  position: number;
}

export interface Component2 {
  raw_text: string;
  extra_comment: string;
  ingredient: Ingredient2;
  id: number;
  position: number;
  measurements: Measurement2[];
  hacks?: Hack4[];
}

export interface Ingredient2 {
  updated_at: number;
  name: string;
  created_at: number;
  display_plural: string;
  id: number;
  display_singular: string;
}

export interface Measurement2 {
  unit: Unit2;
  quantity: string;
  id: number;
}

export interface Unit2 {
  system: string;
  name: string;
  display_plural: string;
  display_singular: string;
  abbreviation: string;
}

export interface Hack4 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface Tag2 {
  root_tag_type: string;
  name: string;
  id: number;
  parent_tag_name?: string;
  display_name: string;
  type: string;
}

export interface Nutrition2 {
  carbohydrates: number;
  fiber: number;
  updated_at: string;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export interface Compilation2 {
  aspect_ratio: string;
  country: string;
  is_shoppable: boolean;
  keywords?: string;
  facebook_posts: any[];
  show: Show3[];
  created_at: number;
  description?: string;
  draft_status: string;
  language: string;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  video_url: string;
  approved_at: number;
  name: string;
  canonical_id: string;
  id: number;
  beauty_url: any;
  buzz_id: any;
  slug: string;
  promotion: string;
  video_id: number;
}

export interface Show3 {
  name: string;
  id: number;
}

export interface Show4 {
  name: string;
  id: number;
}

export interface Credit2 {
  picture_url: string;
  user_id: any;
  name?: string;
  type: string;
  is_verified: boolean;
}

export interface Rendition2 {
  container: string;
  poster_url: string;
  file_size?: number;
  url: string;
  duration: number;
  bit_rate?: number;
  content_type: string;
  aspect: string;
  width: number;
  minimum_bit_rate?: number;
  name: string;
  maximum_bit_rate?: number;
  height: number;
}

export interface Topic2 {
  name: string;
  slug: string;
}

export interface TotalTimeTier2 {
  tier: string;
  display_tier: string;
}

export interface Item2 {
  id: number;
  user_id: any;
  name?: string;
  description?: string;
  type?: string;
  brand_id?: number;
  is_free?: boolean;
  draft_status?: string;
  start_date: any;
  end_date: any;
  created_at?: number;
  updated_at?: number;
  num_items?: number;
  thumbnail_urls?: string[];
  credits?: Credit3[];
  username?: string;
  first_name?: string;
  last_name?: string;
  picture_url?: string;
  specialty_tags?: string[];
  nutrition_visibility?: string;
  country?: string;
  instructions?: Instruction3[];
  keywords?: string;
  facebook_posts?: any[];
  language?: string;
  seo_path?: string;
  user_ratings?: UserRatings3;
  price?: Price3;
  brand?: Brand2;
  slug?: string;
  servings_noun_singular?: string;
  show_id?: number;
  prep_time_minutes?: number;
  is_subscriber_content?: boolean;
  sections?: Section3[];
  tags?: Tag3[];
  nutrition?: Nutrition3;
  is_app_only?: boolean;
  compilations?: Compilation3[];
  num_servings?: number;
  buzz_id?: number;
  tips_and_ratings_enabled?: boolean;
  aspect_ratio?: string;
  show?: Show6;
  inspired_by_url?: string;
  thumbnail_url?: string;
  thumbnail_alt_text?: string;
  total_time_minutes?: number;
  video_url?: string;
  approved_at?: number;
  is_one_top?: boolean;
  servings_noun_plural?: string;
  renditions?: Rendition3[];
  beauty_url?: string;
  is_shoppable?: boolean;
  topics?: Topic3[];
  total_time_tier?: TotalTimeTier3;
  video_ad_content?: string;
  seo_title?: string;
  yields?: string;
  original_video_url?: string;
  canonical_id?: string;
  cook_time_minutes?: number;
  promotion?: string;
  video_id?: number;
  recipes?: Recipe2[];
}

export interface Credit3 {
  picture_url?: string;
  user_id?: number;
  name?: string;
  type: string;
  is_verified?: boolean;
  image_url?: string;
  id?: number;
  slug?: string;
}

export interface Instruction3 {
  start_time: number;
  appliance?: string;
  end_time: number;
  temperature?: number;
  id: number;
  position: number;
  display_text: string;
  hacks?: Hack5[];
}

export interface Hack5 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface UserRatings3 {
  count_positive: number;
  score: number;
  count_negative: number;
}

export interface Price3 {
  total: number;
  updated_at: string;
  portion: number;
  consumption_total: number;
  consumption_portion: number;
}

export interface Brand2 {
  image_url: string;
  name: string;
  id: number;
  slug: string;
}

export interface Section3 {
  components: Component3[];
  name?: string;
  position: number;
}

export interface Component3 {
  raw_text: string;
  extra_comment: string;
  ingredient: Ingredient3;
  hacks?: Hack6[];
  id: number;
  position: number;
  measurements: Measurement3[];
}

export interface Ingredient3 {
  updated_at: number;
  name: string;
  created_at: number;
  display_plural: string;
  id: number;
  display_singular: string;
}

export interface Hack6 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface Measurement3 {
  unit: Unit3;
  quantity: string;
  id: number;
}

export interface Unit3 {
  system: string;
  name: string;
  display_plural: string;
  display_singular: string;
  abbreviation: string;
}

export interface Tag3 {
  root_tag_type: string;
  name: string;
  id: number;
  parent_tag_name?: string;
  display_name: string;
  type: string;
}

export interface Nutrition3 {
  carbohydrates?: number;
  fiber?: number;
  updated_at?: string;
  protein?: number;
  fat?: number;
  calories?: number;
  sugar?: number;
}

export interface Compilation3 {
  aspect_ratio?: string;
  country: string;
  is_shoppable: boolean;
  keywords: any;
  facebook_posts: any[];
  show: Show5[];
  created_at: number;
  description?: string;
  draft_status: string;
  language: string;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  video_url: string;
  approved_at: number;
  name: string;
  canonical_id: string;
  id: number;
  beauty_url?: string;
  buzz_id?: number;
  slug: string;
  promotion: string;
  video_id: number;
}

export interface Show5 {
  name: string;
  id: number;
}

export interface Show6 {
  name: string;
  id: number;
}

export interface Rendition3 {
  container: string;
  poster_url: string;
  file_size?: number;
  url: string;
  duration: number;
  bit_rate?: number;
  content_type: string;
  aspect: string;
  width: number;
  minimum_bit_rate?: number;
  name: string;
  maximum_bit_rate?: number;
  height: number;
}

export interface Topic3 {
  name: string;
  slug: string;
}

export interface TotalTimeTier3 {
  tier: string;
  display_tier: string;
}

export interface Recipe2 {
  nutrition_visibility: string;
  country: string;
  instructions: Instruction4[];
  keywords?: string;
  facebook_posts: any[];
  language: string;
  seo_path?: string;
  user_ratings: UserRatings4;
  price: Price4;
  id: number;
  brand: any;
  slug: string;
  servings_noun_singular: string;
  show_id: number;
  prep_time_minutes: number;
  is_subscriber_content: boolean;
  sections: Section4[];
  brand_id: any;
  tags: Tag4[];
  nutrition: Nutrition4;
  is_app_only: boolean;
  name: string;
  compilations: Compilation4[];
  num_servings: number;
  _id?: number;
  buzz_id?: number;
  tips_and_ratings_enabled: boolean;
  aspect_ratio: string;
  _index?: string;
  show: Show8;
  created_at: number;
  description?: string;
  draft_status: string;
  inspired_by_url?: string;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  total_time_minutes: number;
  video_url?: string;
  updated_at: number;
  credits: Credit4[];
  approved_at: number;
  is_one_top: boolean;
  servings_noun_plural: string;
  renditions: Rendition4[];
  beauty_url?: string;
  is_shoppable: boolean;
  topics: any[];
  total_time_tier?: TotalTimeTier4;
  _type?: string;
  _op_type?: string;
  video_ad_content?: string;
  seo_title?: string;
  yields: string;
  original_video_url?: string;
  canonical_id: string;
  cook_time_minutes: number;
  promotion: string;
  video_id?: number;
}

export interface Instruction4 {
  start_time: number;
  appliance?: string;
  end_time: number;
  temperature?: number;
  id: number;
  position: number;
  display_text: string;
  hacks?: Hack7[];
}

export interface Hack7 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface UserRatings4 {
  count_positive: number;
  score: number;
  count_negative: number;
}

export interface Price4 {
  total: number;
  updated_at: string;
  portion: number;
  consumption_total: number;
  consumption_portion: number;
}

export interface Section4 {
  components: Component4[];
  name?: string;
  position: number;
}

export interface Component4 {
  raw_text: string;
  extra_comment: string;
  ingredient: Ingredient4;
  id: number;
  position: number;
  measurements: Measurement4[];
  hacks?: Hack8[];
  linked_recipe?: LinkedRecipe;
}

export interface Ingredient4 {
  updated_at: number;
  name: string;
  created_at: number;
  display_plural?: string;
  id: number;
  display_singular?: string;
}

export interface Measurement4 {
  unit: Unit4;
  quantity: string;
  id: number;
}

export interface Unit4 {
  system: string;
  name: string;
  display_plural: string;
  display_singular: string;
  abbreviation: string;
}

export interface Hack8 {
  start_index: number;
  match: string;
  end_index: number;
  id: number;
}

export interface LinkedRecipe {
  approved_at: number;
  name: string;
  id: number;
  thumbnail_url: string;
  slug: string;
}

export interface Tag4 {
  root_tag_type: string;
  name: string;
  id: number;
  parent_tag_name?: string;
  display_name: string;
  type: string;
}

export interface Nutrition4 {
  carbohydrates?: number;
  fiber?: number;
  updated_at?: string;
  protein?: number;
  fat?: number;
  calories?: number;
  sugar?: number;
}

export interface Compilation4 {
  aspect_ratio?: string;
  country: string;
  is_shoppable: boolean;
  keywords?: string;
  facebook_posts: any[];
  show: Show7[];
  created_at: number;
  description?: string;
  draft_status: string;
  language: string;
  thumbnail_url: string;
  thumbnail_alt_text: string;
  video_url?: string;
  approved_at: number;
  name: string;
  canonical_id: string;
  id: number;
  beauty_url?: string;
  buzz_id?: number;
  slug: string;
  promotion: string;
  video_id: number;
}

export interface Show7 {
  name: string;
  id: number;
}

export interface Show8 {
  name: string;
  id: number;
}

export interface Credit4 {
  picture_url: string;
  user_id?: number;
  name?: string;
  type: string;
  is_verified: boolean;
}

export interface Rendition4 {
  container: string;
  poster_url: string;
  file_size?: number;
  url: string;
  duration: number;
  bit_rate?: number;
  content_type: string;
  aspect: string;
  width: number;
  minimum_bit_rate?: number;
  name: string;
  maximum_bit_rate?: number;
  height: number;
}

export interface TotalTimeTier4 {
  tier: string;
  display_tier: string;
}
