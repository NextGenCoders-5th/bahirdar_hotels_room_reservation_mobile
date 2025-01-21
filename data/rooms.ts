const rooms = [
  {
    roomNumber: '101',
    roomType: 'Deluxe',
    roomFacilities: ['Wi-Fi', 'Air Conditioning', 'Mini Bar', 'TV'],
    capacity: 2,
    description:
      'A spacious deluxe room with modern amenities and a comfortable king-sized bed.',
    pricePerNight: 150,
    images: [
      require('@/assets/images/rooms/room-1.jpg'),
      require('@/assets/images/rooms/room-2.jpg'),
      require('@/assets/images/rooms/room-3.jpg'),
    ],
    createdAt: new Date('2024-01-01T10:00:00Z'),
    updatedAt: new Date('2024-01-10T14:00:00Z'),
  },
  {
    roomNumber: '102',
    roomType: 'Suite',
    roomFacilities: ['Wi-Fi', 'Kitchenette', 'Balcony', 'Bathtub'],
    capacity: 4,
    description:
      'A luxurious suite with a separate living area and stunning views.',
    pricePerNight: 250,
    images: [
      require('@/assets/images/rooms/room-4.jpg'),
      require('@/assets/images/rooms/room-5.jpg'),
      require('@/assets/images/rooms/room-6.jpg'),
    ],
    createdAt: new Date('2024-01-02T10:00:00Z'),
    updatedAt: new Date('2024-01-12T14:00:00Z'),
  },
  {
    roomNumber: '201',
    roomType: 'Standard',
    roomFacilities: ['Wi-Fi', 'TV', 'Coffee Maker'],
    capacity: 2,
    description:
      'A cozy standard room with basic amenities and a queen-sized bed.',
    pricePerNight: 100,
    images: [
      require('@/assets/images/rooms/room-7.jpg'),
      require('@/assets/images/rooms/room-8.jpg'),
    ],
    createdAt: new Date('2024-01-05T10:00:00Z'),
    updatedAt: new Date('2024-01-15T14:00:00Z'),
  },
  {
    roomNumber: '202',
    roomType: 'Family',
    roomFacilities: ['Wi-Fi', 'Refrigerator', 'Microwave', 'TV'],
    capacity: 5,
    description:
      'A spacious family room with all the facilities for a comfortable stay.',
    pricePerNight: 180,
    images: [
      require('@/assets/images/rooms/room-9.jpg'),
      require('@/assets/images/rooms/room-10.jpg'),
    ],
    createdAt: new Date('2024-01-06T10:00:00Z'),
    updatedAt: new Date('2024-01-16T14:00:00Z'),
  },
  {
    roomNumber: '301',
    roomType: 'Luxury',
    roomFacilities: [
      'Wi-Fi',
      'Hot Tub',
      'Private Balcony',
      '24/7 Room Service',
    ],
    capacity: 2,
    description:
      'An exclusive luxury room with premium amenities and personalized services.',
    pricePerNight: 300,
    images: [
      require('@/assets/images/rooms/room-11.jpg'),
      require('@/assets/images/rooms/room-12.jpg'),
      require('@/assets/images/rooms/room-13.jpg'),
    ],
    createdAt: new Date('2024-01-07T10:00:00Z'),
    updatedAt: new Date('2024-01-17T14:00:00Z'),
  },
];

export default rooms;
