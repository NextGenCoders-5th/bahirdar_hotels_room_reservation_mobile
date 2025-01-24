import { Hotel } from './hotelTypes';
import { Room } from './roomTypes';
import { User } from './userTypes';

export interface Booking {
  id: number;
  roomId: number;
  userId: number;
  hotel: Hotel;
  user: User;
  room: Room;
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
