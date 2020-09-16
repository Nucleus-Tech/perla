import { PaginationParameters, SortParameters } from './types';
import { loginUrl } from './auth/authService';

export const resolveSort = (sort?: SortParameters): string => {
  if (!sort) {
    return '';
  }
  const urlParams: string[] = [];
  for (const key in sort) {
    urlParams.push(`sort=${key},${sort[key]}`);
  }
  return urlParams.length > 0 ? `${urlParams.join('&')}` : '';
};

export const resolvePaging = (paging?: PaginationParameters): string => {
  return paging ? `page=${paging.page}&size=${paging.size}` : '';
};

export const resolveFilters = (filters?: {}): string => {
  if (!filters) {
    return '';
  }
  const urlParams: string[] = [];
  for (const key in filters) {
    if (filters[key] === '' || !filters[key].length) continue;

    // if filter param is an array we want to add every value to url params separately
    if (Array.isArray(filters[key])) {
      filters[key].forEach(x => urlParams.push(`${key}=${x}`));
      continue;
    }

    urlParams.push(`${key}=${filters[key]}`);
  }
  return urlParams.length > 0 ? urlParams.join('&') : '';
};

/**
 * Combine all the provided URL parameters using the querystring format
 * e.g. { size: 20, page: 3 } becomes "size=20&page=3".
 * Function will return empty string if there are no parameters.
 * Function will not prepend "?" character,
 *  so it does not limit consumers in terms of execution and concatenation order.
 *
 * @param paging Pagination parameters containing size and page
 * @param sort Sorting dictionary containing field name and direction
 * @param filters Example object for a given resource
 */
export const resolveUrlParams = (paging?: PaginationParameters, sort?: SortParameters, filters?: {}): string => {
  const urlParams: string[] = [resolvePaging(paging), resolveSort(sort), resolveFilters(filters)];

  const validUrlParams = urlParams.filter(p => p !== '');
  return validUrlParams.length > 0 ? `${validUrlParams.join('&')}` : '';
};

export const isLoginUrl = (url: string | undefined): boolean =>
    !!url && (url.endsWith(loginUrl()));
