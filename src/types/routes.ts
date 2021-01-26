import {Character} from './character';

export type RootStackParamList = {
  Search: {characters: Character[]};
  Info: {character: Character};
};
