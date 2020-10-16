import { get } from '../httpService';

export const destinationUrl = () => 'destinations';

export const destinationRequest = async () =>
    get<[]>(`${destinationUrl()}`);