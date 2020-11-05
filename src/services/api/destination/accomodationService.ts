import { get } from "../httpService";

export const accomodationUrl = () => "accommodation";

export const getAccomodationsForPlace = async (placeId: string) =>
  get<[]>(`${accomodationUrl()}?place=${placeId}`);
