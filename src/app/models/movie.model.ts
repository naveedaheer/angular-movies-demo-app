export interface Movie {
  id: number;
  description: string;
  duration: number;
  genre: [];
  imgPath: string;
  language: string;
  mpaaRating: MpaaRating[];
  name: string;
  userRating: string;
}

export interface MpaaRating {
  label: string;
  type: string;
}
