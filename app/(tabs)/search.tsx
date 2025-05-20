import SearchBar from '@/components/SearchBar';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const {
    loading, 
    error, 
    refetch: loadMovies,
    reset
  } = useFetch(() => fetchMovies({
    query: searchQuery
  }), false)

  useEffect(() => {
    // Building a debouncer as well so we don't call the movies API
    // with every key stroke.

    const timeoutId = setTimeout(async () => {
        if (searchQuery.trim()) {
          await loadMovies();
        } else {
          reset();
        }
    }, 500)

    return () => clearTimeout(timeoutId);
  }, [searchQuery])

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search movies here..."
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
      />
      {/* If not loading and no errors and there is something on the search bar... */}
      <Text>Search results for...</Text>
      {/*
        FlatList with the logo and searchbar as the ListHeaderComponent (a prop of FlatList)
        ListEmptyComponent as well: no loading and no error... if there is something on the search bar,
        say no movies found for..., if the search bar is empty, show something like "search movies".
      */}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
  }
})