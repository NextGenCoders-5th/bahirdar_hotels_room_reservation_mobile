import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import haversine from 'haversine-distance';

interface MapComponentProps {
  hotelName: string;
  hotelCoords: { latitude: number; longitude: number };
}

const MapComponent: React.FC<MapComponentProps> = ({
  hotelName,
  hotelCoords,
}) => {
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const userCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setUserLocation(userCoords);
      setDistance(haversine(userCoords, hotelCoords) / 1000); // Convert to km
    })();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: (userLocation.latitude + hotelCoords.latitude) / 2,
            longitude: (userLocation.longitude + hotelCoords.longitude) / 2,
            latitudeDelta:
              Math.abs(userLocation.latitude - hotelCoords.latitude) + 0.1,
            longitudeDelta:
              Math.abs(userLocation.longitude - hotelCoords.longitude) + 0.1,
          }}
        >
          <Marker
            coordinate={userLocation}
            title='Your Location'
            pinColor='blue'
          />
          <Marker coordinate={hotelCoords} title={hotelName} pinColor='red' />
          <Polyline
            coordinates={[userLocation, hotelCoords]}
            strokeColor='black'
            strokeWidth={2}
          />
        </MapView>
      )}
      {distance !== null && (
        <Text style={styles.distanceText}>
          Distance: {distance.toFixed(2)} km
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  distanceText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MapComponent;
