import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './src/screens';
import {Character} from './src/types';
import {api} from './src/api';
import {LoadingScreen} from './src/screens/LoadingScreen/LoadingScreen';

export default function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  api
    .getCharacters()
    .then((characters: Character[]) => setCharacters(characters));

  return (
    <SafeAreaView style={styles.container}>
      {characters.length === 0 ? (
        <LoadingScreen />
      ) : (
        <Home characters={characters} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
