export const buildQueryString = (queryParams) => {
  let queryString = "";
  if (Object.keys(queryParams).length > 0) {
    delete queryParams[""];
    Object.keys(queryParams).forEach((key) => {
      queryString = queryString.concat(`&${key}=${queryParams[key]}`);
    });

    return queryString;
  }

  return queryString;
};
