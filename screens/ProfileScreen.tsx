import React, { useState } from 'react';
import { Dimensions, View, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

import colors from '@/config/colors';
import FavoritesTab from '@/components/profile/FavoritesTab';
import BookingsTab from '@/components/profile/BookingsTab';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileDetailsScreen from './ProfileDetailsScreen';
import SettingsTab from '@/components/profile/SettingsTab';

export default function ProfileScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'profile', title: 'Profile' },
    { key: 'bookings', title: 'Bookings' },
    { key: 'favorites', title: 'Favorites' },
    { key: 'settings', title: 'Settings' },
  ]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case 'profile':
        return <ProfileDetailsScreen />;
      case 'bookings':
        return <BookingsTab />;
      case 'favorites':
        return <FavoritesTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ProfileHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: colors.primaryExtraLight }}
            indicatorStyle={{
              backgroundColor: colors.primary,
              height: 3,
              width: Dimensions.get('window').width / 4,
            }}
            contentContainerStyle={{ justifyContent: 'center' }}
            activeColor={colors.primaryDark}
            inactiveColor={colors.grey}
            tabStyle={{ minWidth: 100 }}
          />
        )}
      />
    </View>
  );
}
