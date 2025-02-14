import React, { createContext, useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetHotelQuery } from '@/redux/api/hotelApi';
import { IHotel } from '@/types/hotelTypes';

interface HotelContextValue {
  hotel: IHotel | null;
  isLoading: boolean;
  fetchHotel: (hotelId: string) => void;
  error: any;
}

const HotelContext = createContext<HotelContextValue | undefined>(undefined);

// const HOTEL_STORAGE_KEY = (hotelId: string) => `hotel_${hotelId}`;

export const HotelProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hotel, setHotel] = useState<IHotel | null>(null);
  const [hotelId, setHotelId] = useState<string | null>(null);

  const { data, isLoading, error, refetch } = useGetHotelQuery(hotelId || '', {
    skip: !hotelId, // Skip query if no hotelId
  });

  useEffect(() => {
    const saveHotelToStorage = async (hotelId: string, hotelData: IHotel) => {
      try {
        await AsyncStorage.setItem(
          //   HOTEL_STORAGE_KEY(hotelId),
          'hotel',
          JSON.stringify(hotelData)
        );
      } catch (error) {
        console.error('Error saving hotel to storage:', error);
      }
    };

    if (data?.data && hotelId) {
      setHotel(data.data);
      saveHotelToStorage(hotelId, data.data);
    }
  }, [data, hotelId]);

  const fetchHotel = async (hotelId: string) => {
    try {
      setHotelId(hotelId);

      // Try fetching from local storage first
      const storedHotel = await AsyncStorage.getItem(
        // HOTEL_STORAGE_KEY(hotelId)
        'hotel'
      );
      if (storedHotel) {
        setHotel(JSON.parse(storedHotel));
      } else {
        // Fallback to API refetch if not in storage
        refetch();
      }
    } catch (error) {
      console.error('Error fetching hotel from storage:', error);
    }
  };

  return (
    <HotelContext.Provider value={{ hotel, isLoading, error, fetchHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = (): HotelContextValue => {
  const context = useContext(HotelContext);
  if (!context) {
    throw new Error(
      'useHotelContext must be used within a SingleHotelProvider'
    );
  }
  return context;
};
