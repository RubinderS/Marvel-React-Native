import * as React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Character} from '../types';

interface Props {
  characters: Character[];
}

export const CharacterList = (props: Props) => {
  const {characters} = props;

  return (
    <FlatList
      style={styles.listContainer}
      data={characters}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${index}_${item.id}`}
    />
  );
};

const renderItem = (renderItem: {item: Character; index: number}) => {
  const {index, item} = renderItem;

  const TextRow = (props: {textMain: string; textSub: string}) => {
    const {textMain, textSub} = props;

    return (
      <Text>
        <Text style={styles.textMain}>{textMain} </Text>
        <Text style={styles.textSub}>{textSub} </Text>
      </Text>
    );
  };

  return (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{index + 1 + ': ' + item.name}</Text>
        <TextRow textMain="Comics:" textSub={String(item.comics.available)} />
        <TextRow textMain="Series:" textSub={String(item.series.available)} />
        <TextRow textMain="Stories:" textSub={String(item.stories.available)} />
        <TextRow textMain="Events:" textSub={String(item.events.available)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'transparent',
  },
  itemContainer: {
    padding: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  thumbnail: {
    height: '100%',
    flex: 20,
    minWidth: 200,
    borderRadius: 8,
  },
  infoContainer: {
    height: 200,
    flex: 80,
    padding: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'lucida grande',
    marginBottom: 15,
  },
  textMain: {
    fontFamily: 'lucida grande',
    fontSize: 15,
    paddingTop: 8,
    fontWeight: 'bold',
  },
  textSub: {
    //
  },
});
