export interface Result {
  id: string;
  name: string;
  candidates: Candidate[];
}

export interface Candidate {
  id: string;
  name: string;
  image: string;
  votes?: number;
}
