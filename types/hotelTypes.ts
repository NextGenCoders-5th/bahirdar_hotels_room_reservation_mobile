import { HotelLocation } from '@/enums/hotelLocationEnums';
import { IAddress } from './addressTypes';
import { IBooking } from './bookingTypes';
import { IUser } from './userTypes';
import { IRoom } from './roomTypes';

export interface IHotel {
  _id: string;
  id?: string;
  name: string;
  hotelStar?: number;
  imageCover: string;
  hotelImages: string[] | File[];
  address: IAddress;
  location: {
    type: HotelLocation;
    coordinates: number[];
  };
  summary: string;
  description: string;
  facilities: string[];
  manager: string | IUser;
  minPricePerNight: number;
  numOfRooms: number;
  numOfRatings: number;
  avgRating: number;
  createdAt: string;
  updatedAt: string;
  rooms?: IRoom[];
  bookings?: IBooking[];
  reviews?: string[];
  __v?: number;
}

export interface HotelFilter {
  search: string;
  hotelStar: string;
  sort: string;
  selectedStars: string[];
}

export interface IHotelsResponse {
  status: string;
  results: number;
  data: IHotel[];
  pagination: {
    limit: number;
    page: number;
    totalPages: number;
  };
}

export interface IHotelResponse {
  status: string;
  data: {
    hotel: IHotel;
  };
}
