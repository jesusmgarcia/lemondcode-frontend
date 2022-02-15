import * as React from 'react';
import {
  locationEntityVm,
  locationPageEntityVm,
} from './location-collection.vm';
import { getLocationCollection } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useLocationCollection = (url: string) => {
  const [locationCollection, setLocationCollection] = React.useState<
    locationEntityVm[]
  >([]);

  const [pageInfo, setPageInfo] = React.useState<locationPageEntityVm>(
    {} as locationPageEntityVm
  );

  const loadLocationCollection = () => {
    getLocationCollection(url).then((result) => {
      setLocationCollection(mapToCollection(result.results, mapFromApiToVm));
      setPageInfo(result.info);
    });
  };

  return { locationCollection, pageInfo, loadLocationCollection };
};
