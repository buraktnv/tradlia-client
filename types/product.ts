// Shared types for ProductCard components

export interface HomeProductItem {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  shipping: 0 | 1;
  isFavorite: boolean;
  advertCount: number;
  backgroundColor: string;
}

export interface DealOfTheDayContent {
  /** Optional legacy hardcoded countdown — the DealOfTheDay card computes its own live countdown. */
  time?: {
    day: string;
    hour: string;
    min: string;
    second: string;
  };
  image: string;
  price: number;
  name: string;
  brand: string;
}

export interface SingleCardContent {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  shipping: 0 | 1;
  isFavorite: boolean;
  advertCount: number;
  backgroundColor: string;
}

export interface SingleCardProps {
  content: SingleCardContent;
  deleteCard?: (item: SingleCardContent) => void;
  favoriteCard?: (item: SingleCardContent) => void;
}

export interface SliderImage {
  id: number;
  text1: string;
  text2: string;
  img1: string;
  url: string;
}

// Profile/Adverts ProductCard types
export interface AdvertProductContent {
  id: string | number;
  name: string;
  brand: string;
  image: string;
  price: number | string;
  quantity: number | string;
  miad: string;
  info: string;
  red: boolean;
  green: boolean;
}

export interface AdvertProductCardProps {
  content: AdvertProductContent;
  setOpenModal: (open: boolean) => void;
  listType: number;
}