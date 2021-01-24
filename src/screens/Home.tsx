import * as React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {indigo, pink} from 'material-ui-colors';

export const Home = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#d3d3d3"
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={() => <Text>Home</Text>}
          options={{
            tabBarColor: indigo[700],
            tabBarIcon: ({color}) => (
              <Icon name="list" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={() => <Text>Settings</Text>}
          options={{
            tabBarColor: pink[700],
            tabBarIcon: ({color}) => (
              <Icon name="star" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
