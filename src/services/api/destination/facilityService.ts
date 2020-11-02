import { get } from "../httpService";

export const facilityUrl = () => "facilities";

export const getFacilities = async (type: string) =>
  get<[]>(`${facilityUrl()}?type=${type}`);
