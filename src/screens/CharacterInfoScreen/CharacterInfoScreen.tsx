import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Info'>;
  route: RouteProp<RootStackParamList, 'Info'>;
}

export const CharacterInfoScreen = (props: Props) => {
  const {character} = props.route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.desc}>{character.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    flex: 40,
    width: '100%',
  },
  infoContainer: {
    flex: 60,
    width: '100%',
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 15,
  },
  desc: {
    fontSize: 15,
    paddingTop: 8,
  },
});
