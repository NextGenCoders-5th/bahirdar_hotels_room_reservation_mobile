import { IAddress } from './addressTypes';
import { Booking } from './bookingTypes';
import { ITimeStamp } from './general';
import { IUser } from './userTypes';

export interface Hotel {
  _id: string;
  id: string;
  name: string;
  imageCover: string;
  hotelStar: string;
  address: string;
  numOfRooms: number;
  facilities: string[];
  description: string;
  summary: string;
  avgRating: number;
  numOfRatings: number;
  minPricePerNight: number;
  hotelImages: string[];
  bookings: Booking[];
  [key: string]: unknown;
}

export interface HotelFilter {
  search: string;
  hotelStar: string;
  sort: string;
  selectedStars: string[];
}

export interface IHotel {
  _id?: string;
  name: string;
  hotelStar?: number;
  imageCover: string;
  hotelImages: string[] | File[];
  address: IAddress;
  summary: string;
  description: string;
  facilities: string[];
  manager: string | IUser;
  minPricePerNight: number;
  numOfRooms: number;
  numOfRatings: number;
  avgRating: number;
}

export interface IHotelResponse {
  data: IHotel & ITimeStamp;
}
