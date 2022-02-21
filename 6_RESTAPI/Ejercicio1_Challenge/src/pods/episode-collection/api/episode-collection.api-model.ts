import { episodeEntityApi } from 'pods/episode/api';

export interface episodePageEntityApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: episodeEntityApi[];
}
