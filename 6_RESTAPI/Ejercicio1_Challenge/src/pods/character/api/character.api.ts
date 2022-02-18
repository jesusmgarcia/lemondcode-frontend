import Axios from 'axios';
import { characterEntityApi } from './character.api-model';

export const getCharacter = async (url: string): Promise<characterEntityApi> => {
  return Axios.get<characterEntityApi>(url).then((r) => r.data);
};
