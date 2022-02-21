import * as apiModel from '../episode/api/episode.api-model';
import * as viewModel from './episode-collection.vm';

export const mapFromApiToVm = (
  episode: apiModel.episodeEntityApi
): viewModel.episodeEntityVm => ({
  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  episode: episode.episode,
  characters: episode.characters,
  url: episode.url,
  created: episode.created,
});
