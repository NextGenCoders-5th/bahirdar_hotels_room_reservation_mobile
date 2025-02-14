import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IFavoriteHotel } from '@/types/hotelTypes';

const STORAGE_KEY = 'favorite_hotels';

interface FavoriteHotelsContextProps {
  favoriteHotels: IFavoriteHotel[];
  addFavoriteHotel: (hotel: IFavoriteHotel) => Promise<void>;
  removeFavoriteHotel: (hotelId: string) => Promise<void>;
  isFavorite: (hotelId: string) => boolean;
}

const FavoriteHotelsContext = createContext<
  FavoriteHotelsContextProps | undefined
>(undefined);

const FavoriteHotelsContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteHotels, setFavoriteHotels] = useState<IFavoriteHotel[]>([]);

  useEffect(() => {
    loadFavoriteHotels();
  }, []);

  const loadFavoriteHotels = async () => {
    try {
      const storedHotels = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedHotels) {
        setFavoriteHotels(JSON.parse(storedHotels));
      }
    } catch (error) {
      console.error('Error loading favorite hotels:', error);
    }
  };

  const saveFavoriteHotels = async (hotels: IFavoriteHotel[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(hotels));
      setFavoriteHotels(hotels);
    } catch (error) {
      console.error('Error saving favorite hotels:', error);
    }
  };

  const addFavoriteHotel = async (hotel: IFavoriteHotel) => {
    const updatedHotels = [...favoriteHotels, hotel];
    await saveFavoriteHotels(updatedHotels);
  };

  const removeFavoriteHotel = async (hotelId: string) => {
    const updatedHotels = favoriteHotels.filter(
      (hotel) => hotel._id !== hotelId
    );
    await saveFavoriteHotels(updatedHotels);
  };

  const isFavorite = (hotelId: string) => {
    return favoriteHotels.some((hotel) => hotel._id === hotelId);
  };

  return (
    <FavoriteHotelsContext.Provider
      value={{
        favoriteHotels,
        addFavoriteHotel,
        removeFavoriteHotel,
        isFavorite,
      }}
    >
      {children}
    </FavoriteHotelsContext.Provider>
  );
};

const useFavoriteHotelContext = (): FavoriteHotelsContextProps => {
  const context = useContext(FavoriteHotelsContext);
  if (!context) {
    throw new Error(
      'useFavoriteHotelsContext must be used within a FavoriteHotelsContextProvider'
    );
  }
  return context;
};

export { FavoriteHotelsContextProvider, useFavoriteHotelContext };
