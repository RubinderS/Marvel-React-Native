import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Character, RootStackParamList} from '../../types';
import {CharactersScreen} from '../CharactersScreen';
import {CharacterInfoScreen} from '../CharacterInfoScreen';

interface Props {
  characters: Character[];
}

export const Home = (props: Props) => {
  const {characters} = props;
  const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: 'Marvel',
            headerStyle: {backgroundColor: '#ed1d24', elevation: 0},
          }}
          initialParams={{characters: characters}}
        />
        <Screen
          name="Info"
          component={CharacterInfoScreen}
          options={{
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#ed1d24', elevation: 0},
          }}
          initialParams={{character: characters[1]}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
