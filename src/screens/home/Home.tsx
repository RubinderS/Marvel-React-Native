import * as React from 'react';
import {Text} from 'react-native';
import {indigo, pink} from 'material-ui-colors';
import {NavigationContainer} from '@react-navigation/native';
import {CharactersPage} from './CharactersPage';
import {FavoritesPage} from './FavoritesPage';
import Icon from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useState} from 'react';
import {Character} from '../../types';
import {api} from '../../api';

export const Home = () => {
  const Tab = createMaterialBottomTabNavigator();
  const [characters, updateCharacters] = useState<Character[]>([]);
  api
    .getCharacters()
    .then((characters: Character[]) => updateCharacters(characters));

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#d3d3d3"
        shifting={true}
      >
        <Tab.Screen
          name="Characters"
          children={() => <CharactersPage characters={characters} />}
          options={{
            tabBarColor: indigo[700],
            tabBarIcon: ({color}: {focused: boolean; color: string}) => (
              <Icon name="list" color={color} size={24} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Favorites"
          children={() => <FavoritesPage />}
          options={{
            tabBarColor: pink[700],
            tabBarIcon: ({color}: {focused: boolean; color: string}) => (
              <Icon name="star" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
