import * as React from 'react';
import {indigo, pink} from 'material-ui-colors';
import {CharacterListTab} from './CharacterListTab';
import {FavoritesTab} from './FavoritesTab';
import Icon from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useState} from 'react';
import {Character} from '../../types';
import {api} from '../../api';

export const CharactersScreen = () => {
  const Tab = createMaterialBottomTabNavigator();
  const [characters, updateCharacters] = useState<Character[]>([]);
  api
    .getCharacters()
    .then((characters: Character[]) => updateCharacters(characters));

  return (
    <>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#d3d3d3"
        shifting={true}
      >
        <Tab.Screen
          name="Characters"
          children={() => <CharacterListTab characters={characters} />}
          options={{
            tabBarColor: indigo[700],
            tabBarIcon: ({color}: {focused: boolean; color: string}) => (
              <Icon name="list" color={color} size={24} />
            ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Favorites"
          children={() => <FavoritesTab />}
          options={{
            tabBarColor: pink[700],
            tabBarIcon: ({color}: {focused: boolean; color: string}) => (
              <Icon name="star" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
