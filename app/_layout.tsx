import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import './globals.css';

export default function RootLayout() {
  return (
    <>
    <StatusBar hidden={true} />
    <Stack>
      {/* Hides the route group's header - which in this case the route group is (tabs) */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movies/[id]"
        options={{ headerShown: false }}
      />
    </Stack>
    </>
  )
}
