import React, { createContext, useState, useContext } from 'react';

// Define ILocation interface
interface ILocation {
  latitude: number;
  longitude: number;
}

// Define ILocationContext interface
interface ILocationContext {
  location: ILocation | null;
  updateLocation: (location: ILocation) => void;
}

// Create LocationContext
const LocationContext = createContext<ILocationContext | null>(null);

// LocationProvider component
export const LocationProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [location, setLocation] = useState<ILocation | null>(null);

  // Function to update location
  const updateLocation = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setLocation({ latitude, longitude });
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the LocationContext
export const useLocationContext = (): ILocationContext => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error(
      'useLocationContext must be used within a LocationProvider'
    );
  }

  return context;
};

export default LocationContext;
