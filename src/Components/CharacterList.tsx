import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {indigo, pink} from 'material-ui-colors';
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

  return (
    <View style={styles.itemContainer}>
      <Text>{index}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // backgroundColor: 'red'
  },
  itemContainer: {backgroundColor: 'blue', padding: 5, margin: 2},
});
