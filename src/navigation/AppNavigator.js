import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import MatchPredictionsScreen from '../screens/MatchPredictionsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.navigate(route.name);
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }
              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              return options.tabBarLabel || options.title || route.name;
            }}
          />
        )}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Predictions"
          component={MatchPredictionsScreen}
          options={{
            tabBarLabel: 'Predictions',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="football" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;