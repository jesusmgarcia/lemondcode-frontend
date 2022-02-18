import Axios from 'axios';
import { baseEntityApi } from './home.api-model';

export const getBaseUrls = async (url: string): Promise<baseEntityApi> => {
  return Axios.get<baseEntityApi>(url).then((r) => r.data);
};
