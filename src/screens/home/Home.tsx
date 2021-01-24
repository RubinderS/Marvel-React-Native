import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import {Character} from '../../types';
import {api} from '../../api';
import {CharactersScreen} from '../CharactersScreen';
import {CharacterInfoScreen} from '../CharacterInfoScreen';

interface Props {
  characters: Character[];
}

export const Home = (props: Props) => {
  const {characters} = props;
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Characters"
          component={CharactersScreen}
          initialParams={{characters: characters}}
        />
        <Screen name="Info" component={CharacterInfoScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
