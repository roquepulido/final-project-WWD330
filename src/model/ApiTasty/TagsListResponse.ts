export interface TagsListResponse {
  count: number;
  results: Tags[];
  prev: any;
  next: any;
}

export interface Tags {
  display_name: string;
  id: number;
  name: string;
  parent_tag_name?: string;
  root_tag_type: string;
  type: string;
}
