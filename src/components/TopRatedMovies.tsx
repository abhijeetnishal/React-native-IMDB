import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import config from '../../config';

const API_KEY = config()

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View style = {styles.main}>
      <Text style = {styles.topRated}>
        Top Rated Movies
      </Text>
      <ScrollView horizontal={true} style = {{paddingBottom: 20}}> 
      {
        movies.map((movie: any) => (
          <View style={styles.movies} key={movie.id}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
              style={{ width: 170, height: 220 }}
            />
            <Text style={styles.movieName}>{movie.title}</Text>
          </View>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default TopRatedMovies;

const styles = StyleSheet.create({
  main:{
    display: 'flex',
    flexDirection: 'column',
  },
  topRated:{
    fontSize: 23,
    fontWeight: '900',
    paddingBottom: 10,
    paddingLeft: 5
  },
  movies: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 5
  },
  movieName: {
    width: 150,
    height: 35,
    fontWeight: '500'
  }
})