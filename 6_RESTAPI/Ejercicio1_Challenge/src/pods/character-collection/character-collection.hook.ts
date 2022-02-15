import * as React from 'react';
import {
  characterEntityVm,
  characterPageEntityVm,
} from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = (url: string) => {
  const [characterCollection, setCharacterCollection] = React.useState<
    characterEntityVm[]
  >([]);

  const [pageInfo, setPageInfo] = React.useState<characterPageEntityVm>(
    {} as characterPageEntityVm
  );

  const loadCharacterCollection = () => {
    getCharacterCollection(url).then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      setPageInfo(result.info);
    });
  };

  return { characterCollection, pageInfo, loadCharacterCollection };
};
