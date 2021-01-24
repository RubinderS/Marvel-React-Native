import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './src/screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {indigo, pink} from 'material-ui-colors';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
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
              tabBarIcon: ({color}: {focused: boolean; color: string}) => (
                <Icon name="list" color={color} size={24} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={() => <Text>Settings</Text>}
            options={{
              tabBarColor: pink[700],
              tabBarIcon: ({color}: {focused: boolean; color: string}) => (
                <Icon name="star" color={color} size={24} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
