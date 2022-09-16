export interface PaginationResponse<T> {
  body: T[];
  status: string;
  total_hits:number;
  page:number;
  total_pages:number;
  page_size:number
}
