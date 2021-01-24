import {Character} from './character';

export type RootStackParamList = {
  Characters: {characters: Character[]};
  Info: {character: Character};
};
