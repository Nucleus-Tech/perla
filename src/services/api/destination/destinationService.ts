import { get } from "../httpService";

export const destinationUrl = () => "destinations";

export const destinationRequest = async () => get<[]>(`${destinationUrl()}`);

export const getTopDestinations = async (
  active: boolean = true,
  offset: number = 0,
  limit: number = 3
) =>
  get<[]>(
    `${destinationUrl()}/top?active=${active}&limit=${limit}&offset=${offset}`
  );
