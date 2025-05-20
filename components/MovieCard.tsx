import { Movie } from '@/interfaces/interfaces';
import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity>
        <Image
          source={{ uri:
              poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` :
              'https://placehold.co/600x400/1a1a1a/ffffff.png'
          }}
          style={{ width: 100, height: 100 }}
          resizeMode='cover'
        />
        <Text style={styles.title} numberOfLines={1}>{title}</Text>

      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  title: {
    color: "#fff"
  }
})