import Axios from 'axios';
import { characterPageEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (
  url: string
): Promise<characterPageEntityApi> => {
  return Axios.get<characterPageEntityApi>(url).then((r) => r.data);
};
