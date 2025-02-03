export interface IRoom {
  id: number;
  _id: string;
  name: string;
  roomType: string;
  price: number;
  roomNumber: string;
  images: string[];
  description: string;
  amenities: string[];
  pricePerNight: string;
  capacity: string;
  [key: string]: unknown;
}

export interface RoomFilter {
  search: string;
  roomType: string;
  sort: string;
  selectedTypes: string[];
}
