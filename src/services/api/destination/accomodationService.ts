import { get } from "../httpService";

export const accomodationUrl = () => "accomodation";

export const getAccomodationsForPlace = async (placeId: string) =>
  get<[]>(`${accomodationUrl()}?place=${placeId}`);
