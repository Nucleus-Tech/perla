import { get } from "../httpService";

export const accomodationUrl = () => "accommodation";
/*
export const getAccomodationsForPlace = async (
  queryString: string = "",
  limit: number = 6,
  offset: number = 0
) =>
  get<[]>(
    `${accomodationUrl()}?${queryString}&limit=${limit}&offset=${offset}`
  );

  */

export const getAccomodationsForPlace = async (
  placeId: string,
  queryString: string = "",
  limit: number = 6,
  offset: number = 0
) =>
  get<[]>(
    `${accomodationUrl()}?destination=${placeId}${queryString}&limit=${limit}&offset=${offset}`
  );
