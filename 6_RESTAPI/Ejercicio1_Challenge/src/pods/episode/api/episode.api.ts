import Axios from 'axios';
import { characterEntityApi } from 'pods/character/api';
import { episodeEntityApi } from './episode.api-model';

export const getCharacterCollection = async (
  url: string
): Promise<characterEntityApi[]> => {
  return Axios.get<characterEntityApi[]>(url).then((r) => r.data);
};

export const getEpisode = async (url: string): Promise<episodeEntityApi> => {
  return Axios.get<episodeEntityApi>(url).then((r) => r.data);
};
