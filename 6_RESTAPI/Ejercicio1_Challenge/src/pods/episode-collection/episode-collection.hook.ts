import * as React from 'react';
import { episodeEntityVm, episodePageEntityVm } from './episode-collection.vm';
import { getEpisodeCollection } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useEpisodeCollection = (url: string) => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    episodeEntityVm[]
  >([]);

  const [pageInfo, setPageInfo] = React.useState<episodePageEntityVm>(
    {} as episodePageEntityVm
  );

  const loadEpisodeCollection = () => {
    getEpisodeCollection(url).then((result) => {
      setEpisodeCollection(mapToCollection(result.results, mapFromApiToVm));
      setPageInfo(result.info);
    });
  };

  return { episodeCollection, pageInfo, loadEpisodeCollection };
};
