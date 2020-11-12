import { get } from "../httpService";

export const destinationUrl = () => "destinations";

export const destinationRequest = async () => get<[]>(`${destinationUrl()}`);

export const getTopDestinations = async (
  active: boolean = true,
  offset: number = 0,
  limit: number = 4
) =>
  get<[]>(
    `${destinationUrl()}/top?active=${active}&limit=${limit}&offset=${offset}`
  );

export const getDestinationByName = async (destination: string) =>
  get<[]>(`${destinationUrl()}/place/${destination}`);

export const searchDestinations = async (
  active: boolean = true,
  word: string
) => get<[]>(`${destinationUrl()}/explore?active=${active}&word=${word}`);
