import Axios from 'axios';
import { episodePageEntityApi } from './episode-collection.api-model';

export const getEpisodeCollection = async (
  url: string
): Promise<episodePageEntityApi> => {
  return Axios.get<episodePageEntityApi>(url).then((r) => r.data);
};
