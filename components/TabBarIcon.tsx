import colors from '@/config/colors';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type TabBarIconProps = {
  name: keyof typeof Ionicons.glyphMap; // Restricts to valid Ionicons names
  focused: boolean; // Indicates if the tab is active
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const borderAnim = useRef(new Animated.Value(focused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(borderAnim, {
      toValue: focused ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // BorderWidth is not supported with native driver
    }).start();
  }, [focused]);

  const borderWidth = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4], // Animate border width from 0 to 4
  });

  return (
    <Animated.View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: 30,
          height: 30,
          borderRadius: 15,
        },
        {
          borderWidth: 2,
          borderColor: focused ? colors.primaryDark : 'transparent',
        },
      ]}
    >
      <Ionicons
        name={name}
        size={22}
        color={focused ? colors.primaryDark : colors.grey}
      />
    </Animated.View>
  );
};

export default TabBarIcon;
