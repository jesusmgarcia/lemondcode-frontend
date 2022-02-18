import { characterEntityApi } from 'pods/character/api';

export interface characterPageEntityApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: characterEntityApi[];
}
