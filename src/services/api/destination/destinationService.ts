import { get } from '../httpService';
import { DestinationResponse } from '../../../shared/models/onboarding/response/destinationResponse';

export const destinationUrl = () => 'destinations';

export const destinationRequest = async () =>
    get<DestinationResponse>(`${destinationUrl()}`);