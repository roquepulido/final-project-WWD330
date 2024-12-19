export interface TipsListResponse {
  count: number;
  results: TipsList[];
}

export interface TipsList {
  author_avatar_url: string;
  author_name: string;
  author_rating: number;
  author_user_id: number;
  author_username: string;
  author_is_verified: number;
  is_flagged: boolean;
  recipe_id: number;
  status_id: number;
  comment_id: number;
  comment_count: number;
  tip_body: string;
  tip_id: number;
  tip_photo?: TipPhoto;
  created_at: any;
  updated_at: number;
  upvotes_total: number;
}

export interface TipPhoto {
  height: number;
  url: string;
  width: number;
}
