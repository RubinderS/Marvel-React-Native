import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Info'>;
  route: RouteProp<RootStackParamList, 'Info'>;
}

export const CharacterInfoScreen = (props: Props) => {
  const {character} = props.route.params;
  const {comics, stories, series, events} = character;
  const totalEvents =
    comics.available + stories.available + series.available + events.available;

  useEffect(() => {
    props.navigation.setOptions({title: character.name});
  }, []);

  const StatRow = (props: {title: string; eventsCount: number}) => {
    const {title, eventsCount} = props;

    return (
      <View style={styles.statRow}>
        <Text style={styles.statTitle}>{title}</Text>
        <View style={styles.statBar}>
          <View
            style={[
              styles.statBarProgress,
              eventsCount
                ? {width: `${(eventsCount * 100) / totalEvents}%`}
                : {width: 10, backgroundColor: 'transparent'},
            ]}
          >
            <Text
              style={[
                styles.statBarProgressNumber,
                eventsCount === 0 && {color: 'black'},
              ]}
            >
              {eventsCount}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />
      <View style={styles.infoContainer}>
        <ScrollView>
          <Text style={styles.heading}>Info</Text>
          <Text style={styles.desc}>
            {character.description ||
              `more information about ${character.name} coming soon...`}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.heading}>Stats</Text>
          <View style={styles.statsContainer}>
            <StatRow title="Comics" eventsCount={comics.available} />
            <StatRow title="Series" eventsCount={series.available} />
            <StatRow title="Stories" eventsCount={stories.available} />
            <StatRow title="Events" eventsCount={events.available} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageStyle: {opacity: 0.5},
  thumbnail: {
    flex: 50,
    width: '100%',
  },
  infoContainer: {
    flex: 50,
    width: '100%',
    padding: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  desc: {
    fontSize: 15,
    textAlign: 'justify',
    paddingTop: 8,
  },
  divider: {
    backgroundColor: '#ed1d24',
    height: 1,
    width: '100%',
    marginBottom: 8,
  },
  statsContainer: {
    //
  },
  statRow: {
    width: '100%',
    height: 30,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statTitle: {
    textAlign: 'center',
    flex: 25,
  },
  statBar: {
    flex: 75,
    height: '100%',
  },
  statBarProgress: {
    backgroundColor: '#ed1d24',
    height: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 3,
  },
  statBarProgressNumber: {
    color: 'white',
  },
});
