import { Role } from '@/enums/roleEnum';
import { IHotel } from './hotelTypes';

export interface ISignupRequest {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ISignupResponse {
  status: string;
  isOnboarding: boolean;
  message: string;
  data: {
    username: string;
    email: string;
    password: string;
    role: Role;
    profilePicture: string;
    isOnboarding: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  token: string;
  data: {
    _id: string;
    username: string;
    email: string;
    isVerified: boolean;
    password: string;
    role: Role;
    profilePicture: string;
    isOnboarding: boolean;
    createdAt: string;
    updatedAt: string;
    __v?: number;
  };
}

export interface IAuthResponse {
  _id: string;
  username: string;
  email: string;
  isVerified?: boolean;
  password: string;
  role: Role;
  profilePicture: string;
  isOnboarding?: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
