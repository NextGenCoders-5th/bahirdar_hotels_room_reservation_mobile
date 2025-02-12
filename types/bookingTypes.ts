import { BookingStatus } from '@/enums/bookingStatusEnums';

export interface IBooking {
  _id?: string;
  user: string;
  room: string;
  checkIn: Date;
  checkOut: Date;
  status?: BookingStatus;
  isPaid?: boolean;
  paymentDate: string;
  numOfNights?: number;
  hotel?: string;
  totalPrice?: number;
  pricePerNight?: number;
  createdAt?: string;
  updatedAt?: string;
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

export interface IBookingResponse {
  data: IBooking;
  status: string;
}
export interface IBookingRequest {
  user: string;
  room: string;
  checkIn: string;
  checkOut: string;
}

export interface IBookingSummary {
  pricePerNight: number;
  numOfNights: number;
  totalPrice: number;
}
