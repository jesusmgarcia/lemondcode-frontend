export interface episodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface episodePageEntityApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: episodeEntityApi[];
}
