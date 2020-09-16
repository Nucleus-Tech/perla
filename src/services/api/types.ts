export interface Pageable {
  pageable: {
    pageSize: number;
    pageNumber: number;
    offset: number;
  };
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
}

export interface ListResponse<T> {
  content: T[];
  pageInfo: Pageable;
}

export interface PaginationParameters {
  page: number;
  size: number;
}

export enum SortOrder {
  Ascending = "ASC",
  Descending = "DESC",
}

export interface SortParameters {
  [fieldName: string]: SortOrder;
}
