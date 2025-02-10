import { Gender } from '@/enums/genderEnum';
import { Role } from '@/enums/roleEnum';
import { IAddress } from './addressTypes';
import { IBooking } from './bookingTypes';
import { IHotel } from './hotelTypes';

export interface User {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photo: string;
  phoneNumber: string;
  hotel?: IHotel;
  bookings?: IBooking[];
  [key: string]: unknown;
}

export interface UserFilter {
  search: string;
  role: string;
  limit: string;
}

export interface ResetPassInterface {
  token: string;
  password: string;
  passwordConfirm: string;
}

export interface UpdatePasswordForm {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
}

export interface IUpdateMeForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  photo: FileList;
  phone: string;
}

export interface IUser {
  _id: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  username: string;
  dateOfBirth?: string;
  gender?: Gender;
  email: string;
  phoneNumber?: string;
  password: string;
  role: Role;
  profilePicture: string;
  address: IAddress;
  isOnboarding: boolean;
  hotel?: string;
  bookings?: string[];
  idPhoto?: string;
  isVerified: boolean;
  verifiedBy?: string;
  passwordResetToken?: string;
  passwordResetExpires?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IUserResponse {
  status: string;
  data: IUser;
}
