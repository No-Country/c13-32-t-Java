export interface IselectOption {
  name: string | number;
  value: string | number;
}

export interface IBriefJobOffer {
  title: string;
  company: string;
  date: string;
  seen: boolean;
  isFavorite: boolean;
}