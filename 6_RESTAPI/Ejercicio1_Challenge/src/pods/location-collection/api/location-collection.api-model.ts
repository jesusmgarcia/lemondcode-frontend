export interface locationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface locationPageEntityApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: locationEntityApi[];
}
