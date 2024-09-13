import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/loginScreen';  // ตรวจสอบ path ของไฟล์
import HomeScreen from './screens/HomeScreen';    // ตรวจสอบ path ของไฟล์
import ProfileScreen from './screens/ProfileScreen';
import ProductDetail from './screens/ProductDetail';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00cf66', // Color for active icon
        tabBarInactiveTintColor: 'gray',  // Color for inactive icon
        tabBarStyle: {
          backgroundColor: '#333',  // Gray background for Tab Bar
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}  // Hide header for LoginScreen
        />
        <Stack.Screen name="Tab" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail} 
          options={{ headerShown: false }}  // Hide header for ProductDetail
        />
        <Stack.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ headerShown: false }}  // Hide header for CartScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
