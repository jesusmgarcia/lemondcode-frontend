import * as React from 'react';
import { baseEntityApi } from './api/home.api-model';
import { getBaseUrls } from './api';

export const useHomeBaseUrls = (url: string) => {
  const [baseUrls, setBaseUrls] = React.useState<baseEntityApi>(
    {} as baseEntityApi
  );

  const loadBaseUrls = () => {
    getBaseUrls(url).then((result) => {
      setBaseUrls(result);
    });
  };

  return { baseUrls, loadBaseUrls };
};
