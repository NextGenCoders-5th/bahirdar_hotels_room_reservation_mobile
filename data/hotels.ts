const hotels = [
  {
    _id: '1',
    name: 'Azwa Hotel',
    hotelStar: 4,
    imageCover: '@/assets/images/hotels/hotel-1.jpg',
    hotelImages: [
      '@/assets/images/hotels/hotel-2.jpg',
      '@/assets/images/hotels/hotel-3.jpg',
    ],
    address: {
      city: 'Bahir Dar',
      subcity: 'Piassa',
      woreda: '03',
      street: 'African Avenue',
    },
    summary: 'Experience luxury in the heart of Addis Ababa',
    description:
      'Skyline Hotel offers a perfect blend of comfort and convenience. With stunning views of the city and top-notch amenities, your stay will be unforgettable.',
    facilities: ['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Restaurant'],
    manager: 'manager1',
    minPricePerNight: 150,
    numOfRooms: 100,
    numOfRatings: 250,
    avgRating: 4.5,
  },
  {
    _id: '2',
    name: 'Palm Palace Hotel',
    hotelStar: 3,
    imageCover: '@/assets/images/hotels/hotel-4.jpg',
    hotelImages: [
      '@/assets/images/hotels/hotel-5.jpg',
      '@/assets/images/hotels/hotel-6.jpg',
    ],
    address: {
      city: 'Bahir Dar',
      subcity: 'St. George',
      woreda: '05',
      street: 'Ras Desta Damtew Street',
    },
    summary: 'Your home away from home in Addis Ababa',
    description:
      'Harmony Inn provides a cozy and welcoming atmosphere for both business and leisure travelers. Enjoy our friendly service and comfortable rooms.',
    facilities: [
      'Free Wi-Fi',
      'Restaurant',
      'Meeting Rooms',
      'Laundry Service',
    ],
    manager: 'manager2',
    minPricePerNight: 80,
    numOfRooms: 50,
    numOfRatings: 150,
    avgRating: 4.2,
  },
  {
    _id: '3',
    name: 'Unison Hotel',
    hotelStar: 3,
    imageCover: '@/assets/images/hotels/hotel-7.jpg',
    hotelImages: [
      '@/assets/images/hotels/hotel-8.jpg',
      '@/assets/images/hotels/hotel-9.jpg',
    ],
    address: {
      city: 'Bahir Dar',
      subcity: 'Belay Zeleke',
      woreda: '05',
      street: 'Aregawian Street',
    },
    summary: 'Your home away from home in Addis Ababa',
    description:
      'Harmony Inn provides a cozy and welcoming atmosphere for both business and leisure travelers. Enjoy our friendly service and comfortable rooms.',
    facilities: [
      'Free Wi-Fi',
      'Restaurant',
      'Meeting Rooms',
      'Laundry Service',
    ],
    manager: 'manager2',
    minPricePerNight: 80,
    numOfRooms: 50,
    numOfRatings: 150,
    avgRating: 4.2,
  },
  {
    _id: '4',
    name: 'Dib Anbessa Hotel',
    hotelStar: 3,
    imageCover: '@/assets/images/hotels/hotel-10.jpg',
    hotelImages: [
      '@/assets/images/hotels/hotel-3.jpg',
      '@/assets/images/hotels/hotel-6.jpg',
    ],
    address: {
      city: 'Bahir Dar',
      subcity: 'St. George',
      woreda: '05',
      street: 'Abay Mado street',
    },
    summary: 'Your home away from home in Bahir Dar',
    description:
      'Harmony Inn provides a cozy and welcoming atmosphere for both business and leisure travelers. Enjoy our friendly service and comfortable rooms.',
    facilities: [
      'Free Wi-Fi',
      'Restaurant',
      'Meeting Rooms',
      'Laundry Service',
    ],
    manager: 'manager2',
    minPricePerNight: 80,
    numOfRooms: 50,
    numOfRatings: 150,
    avgRating: 4.2,
  },
];

export default hotels;
