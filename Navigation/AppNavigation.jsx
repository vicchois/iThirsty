import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Landing from '../Features/Landing/Screens/Landing';
import Plants from '../Features/Plants/Screens/Plants';
import Explore from '../Features/Explore/Screens/Explore';
import About from '../Features/About/Screens/About';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Landing}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Plants"
          component={Plants}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="leaf-outline" color={color} size={size} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" color={color} size={size} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="happy-outline" color={color} size={size} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
