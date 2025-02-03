import { IHotel } from './hotelTypes';
import { IRoom } from './roomTypes';
import { User } from './userTypes';

export interface IBooking {
  id: number;
  roomId: number;
  userId: number;
  hotel: IHotel;
  user: User;
  room: IRoom;
  numOfNights: number;
  checkInDate: string;
  checkOutDate: string;
  status: string;
  [key: string]: unknown;
}

export interface BookingFilter {
  status: string;
  hotelId: string;
}

export interface BookingPayment {
  roomId: string;
  checkIn: string;
  checkOut: string;
  tx_ref?: string;
}
