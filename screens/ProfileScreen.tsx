import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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
    { key: 'bookings', title: 'Bookings' },
    { key: 'favorites', title: 'Favorites' },
    { key: 'profile', title: 'Profile' },
    { key: 'settings', title: 'Settings' },
  ]);

  const renderScene = SceneMap({
    bookings: BookingsTab,
    favorites: FavoritesTab,
    profile: ProfileDetailsScreen,
    settings: SettingsTab,
  });

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.white, paddingVertical: 15 }}
    >
      <ProfileHeader />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: colors.white, marginBottom: 15 }}
            indicatorStyle={{ backgroundColor: colors.primary }}
            contentContainerStyle={{ justifyContent: 'center' }}
            activeColor={colors.primary}
            inactiveColor={colors.greyDark}
          />
        )}
      />
    </View>
  );
}
