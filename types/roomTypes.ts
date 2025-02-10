export interface IRoom {
  id?: number;
  _id: string;
  roomType: string;
  price: number;
  roomNumber: string;
  images: string[];
  description: string;
  pricePerNight: number;
  roomFacilities: string[];
  capacity: number;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IRoomResponse {
  status: string;
  data: IRoom;
}
