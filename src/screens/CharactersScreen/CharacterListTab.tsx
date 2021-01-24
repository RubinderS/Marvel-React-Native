import * as React from 'react';
import {Text} from 'react-native';
import {indigo, pink} from 'material-ui-colors';
import {CharacterList} from '../../Components';
import {Character} from '../../types';

interface Props {
  characters: Character[];
}

export const CharacterListTab = (props: Props) => {
  const {characters} = props;
  return <CharacterList characters={characters} />;
};
