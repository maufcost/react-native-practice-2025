import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

interface SearchBarProps {
  placeholder: string,
  onPress?: () => void,
  value: string,
  onChangeText: (text: string) => void
}

const SearchBar:React.FC<SearchBarProps> = ({ onPress, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
      <Image source={icons.search} resizeMode="contain" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        style={styles.input}
      />
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {

  },
  input: {

  }
})