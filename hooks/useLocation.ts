import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function useLocation() {
  const [location, setLocation] = useState<Coordinates | null>(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const position = await Location.getLastKnownPositionAsync();
      if (position) {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}

export default useLocation;
