import { ArticlesDto } from './../model/articleDto';
import { PaginationResponse } from './../../shared/contracts/pagination-response.interface';
export const GetTestDataArticle: PaginationResponse<ArticlesDto> = {
  body: [],
  page: 1,
  page_size: 12,
  status: "Ok",
  total_hits: 10000,
  total_pages: 834
}

