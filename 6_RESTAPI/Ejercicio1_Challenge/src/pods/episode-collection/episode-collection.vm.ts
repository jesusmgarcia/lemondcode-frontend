export interface episodeEntityVm {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface episodePageEntityVm {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
