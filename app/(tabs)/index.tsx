import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// export default function IndexPractice() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome, Mauricio!</Text>
//       <Link href="/onboarding">Onboarding</Link>
//       <Link href="/movies/avengers">Avengers</Link>
//     </View>
//   );
// }

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: '',
  }));

  return (
    <View style={styles.container}>
      <Image source={images.bg} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        minHeight: "100%", paddingBottom: 10
      }}>
        <Image source={icons.logo} />

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff"/>
        ) : moviesError ? (
          <Text style={styles.error}>{moviesError?.message}</Text>
        ) : (
          <View>
            <SearchBar
              placeholder="Search"
              onPress={() => router.push("/search")}
            />
            <Text style={styles.title}>Latest Movies</Text>
            <FlatList
              data={movies}
              renderItem = {({ item }) => (
                <MovieCard {...item} />
              )}
              keyExtractor={({ item }) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 20,
                paddingRight: 5,
                marginBottom: 10
              }}
              // Because we're already inside a scroll view
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0b0b0b'
  },
  title: {
    fontSize: 32, // use numbers, not 'em' strings
    fontWeight: "bold",
    color: "#fff"
  },
  error: {
    color: "#f54251"
  },
});
