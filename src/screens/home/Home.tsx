import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import {Character} from '../../types';
import {api} from '../../api';
import {CharactersScreen} from '../CharactersScreen';
import {CharacterInfoScreen} from '../CharacterInfoScreen';
import {indigo, teal} from 'material-ui-colors';

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
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: indigo[700]},
          }}
          initialParams={{characters: characters}}
        />
        <Screen
          name="Info"
          component={CharacterInfoScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: teal[700]},
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
