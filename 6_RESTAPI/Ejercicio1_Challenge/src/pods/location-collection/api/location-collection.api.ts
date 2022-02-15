import Axios from 'axios';
import { locationPageEntityApi } from './location-collection.api-model';

export const getLocationCollection = async (
  url: string
): Promise<locationPageEntityApi> => {
  return Axios.get<locationPageEntityApi>(url).then((r) => r.data);
};
