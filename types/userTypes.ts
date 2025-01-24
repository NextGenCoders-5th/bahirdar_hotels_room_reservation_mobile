import { Gender } from '@/enums/genderEnum';
import { Role } from '@/enums/roleEnum';
import { IAddress } from './addressTypes';
import { Booking } from './bookingTypes';
import { ITimeStamp } from './general';
import { Hotel } from './hotelTypes';

export interface User {
  id?: string;
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  photo: string;
  phoneNumber: string;
  hotel?: Hotel;
  bookings?: Booking[];
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
  _id?: string;
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: Date;
  gender: Gender;
  email: string;
  phoneNumber: string;
  role: Role;
  profilePicture: string;
  address: IAddress;
}

export interface IUserResponse {
  data: (IUser & ITimeStamp)[];
}
