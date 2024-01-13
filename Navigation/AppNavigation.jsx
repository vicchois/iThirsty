import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from '../Features/Landing/Screens/Landing';
import Feed from '../Features/Feed/Screens/Feed';
import About from '../Features/About/Screens/About';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
