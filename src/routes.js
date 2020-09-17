import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';


import Listagem from './pages/Listagem';
import Categorias from './pages/Categorias';
import Itens from './pages/Itens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Lista') {
                iconName = 'tasks';
              } else if (route.name === 'Categorias') {
                iconName = 'book';
              } else if (route.name === 'Itens') {
                iconName = 'shopping-cart'
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
          activeTintColor: '#00b894',
          inactiveTintColor: 'white',
          inactiveBackgroundColor: '#00b894'
        }}
      >
        <Tab.Screen name="Lista" component={Listagem} />
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen name="Itens" component={Itens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}