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
  manager: string; // We'll use string instead of Types.ObjectId for JSON server
  minPricePerNight: number;
  numOfRooms: number;
  numOfRatings: number;
  avgRating: number;
}
