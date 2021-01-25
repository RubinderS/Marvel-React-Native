import * as React from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {Character, RootStackParamList} from '../../types';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Characters'>;
  route: RouteProp<RootStackParamList, 'Characters'>;
}

export const CharactersScreen = (props: Props) => {
  const {navigation, route} = props;
  const {characters} = route.params;
  const [charactersList, setCharactersList] = useState<Character[]>([
    ...characters,
  ]);
  const [searchValue, setSearchValue] = useState<string>('');

  const updateSearch = (text: string) => {
    setSearchValue(text);
    setCharactersList(
      characters.filter((character) =>
        character.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const handleBackButton = () => {
    if (searchValue) {
      updateSearch('');
      Keyboard.dismiss();
      return true;
    }

    return false;
  };

  navigation.addListener('blur', () => {
    console.log('blur');
    BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  });

  navigation.addListener('focus', () => {
    console.log('focus');
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
  });

  const renderItem = (renderItem: {item: Character; index: number}) => {
    const {item} = renderItem;
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
          <Text style={styles.name}>{item.name}</Text>
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
      <View style={styles.searchBoxContainer}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="Search"
          placeholderTextColor="rgba(211, 211, 211, 0.6)"
          value={searchValue}
          onChangeText={updateSearch}
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={charactersList}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_${item.id}`}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchBoxContainer: {
    flexDirection: 'row',
    backgroundColor: '#ed1d24',
    borderRadius: 15,
    margin: 10,
    height: 32,
  },
  searchIcon: {
    color: '#d3d3d3',
    fontSize: 13,
    padding: 10,
    flex: 5,
  },
  searchBox: {
    color: '#d3d3d3',
    fontSize: 15,
    height: '100%',
    paddingRight: 12,
    flex: 95,
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
  },
});
