import * as React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {indigo} from 'material-ui-colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../types';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Characters'>;
  route: RouteProp<RootStackParamList, 'Characters'>;
}

export const CharactersScreen = (props: Props) => {
  const {characters} = props.route.params;

  const renderItem = (renderItem: {item: Character; index: number}) => {
    const {index, item} = renderItem;
    const {navigation} = props;

    const TextRow = (props: {textMain: string; textSub: string}) => {
      const {textMain, textSub} = props;

      return (
        <View style={styles.statsRowContainer}>
          <View style={styles.statTitleContainer}>
            <Text style={styles.statTitle}>{textMain} </Text>
          </View>
          <Text style={styles.statInfo}>{('0' + textSub).slice(-2)} </Text>
        </View>
      );
    };

    const onPress = () => {
      navigation.navigate('Info', {character: item});
    };

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Image
          style={styles.thumbnail}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{index + 1 + ': ' + item.name}</Text>
          <View style={styles.divider} />
          <TextRow textMain="Comics:" textSub={String(item.comics.available)} />
          <TextRow textMain="Series:" textSub={String(item.series.available)} />
          <TextRow
            textMain="Stories:"
            textSub={String(item.stories.available)}
          />
          <TextRow textMain="Events:" textSub={String(item.events.available)} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TextInput style={styles.searchBox} />
      <FlatList
        style={styles.listContainer}
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_${item.id}`}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    fontSize: 20,
    height: 30,
  },
  listContainer: {
    backgroundColor: 'transparent',
  },
  itemContainer: {
    margin: 5,
    height: 150,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  thumbnail: {
    height: '100%',
    flex: 20,
    minWidth: 70,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    height: '100%',
    flex: 80,
    padding: 8,
  },
  divider: {
    backgroundColor: '#ed1d24',
    height: 1,
    width: '100%',
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  statsRowContainer: {
    flexDirection: 'row',
    height: 20,
  },
  statTitleContainer: {
    width: 65,
  },
  statTitle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  statInfo: {
    fontSize: 13,
    //
  },
});
