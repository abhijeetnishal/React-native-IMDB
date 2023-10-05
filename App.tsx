import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import Header from './src/components/Header';
import NowPlaying from './src/components/NowPlaying';
import TopRatedMovies from './src/components/TopRatedMovies';
import TopRatedSeries from './src/components/TopRatedSeries';
import LatestSeries from './src/components/LatestSeries';

const App = () => {
  return (
    <ScrollView style={styles.main}>
      <Header />
      <NowPlaying />
      <TopRatedMovies />
      <TopRatedSeries />
      <LatestSeries />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
  },
});
