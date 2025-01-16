import { Address } from './address';

export interface Hotel {
  _id: string;
  name: string;
  hotelStar?: number;
  imageCover: string;
  hotelImages: string[];
  address: Address;
  summary: string;
  description: string;
  facilities: string[];
  manager: string;
  minPricePerNight: number;
  numOfRooms: number;
  numOfRatings: number;
  avgRating: number;
}
