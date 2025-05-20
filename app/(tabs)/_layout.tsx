import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View
} from 'react-native'

interface TabIconProps {
  focused: boolean,
  icon: ImageSourcePropType | undefined,
  title: string
}

const TabIcon:React.FC<TabIconProps> = ({ focused, icon, title}) => {
  if (focused) {
    return (
      <ImageBackground source={images.highlight} style={styles.pillContainer}>
        <Image source={icon} tintColor="#151312" />
        <Text>{title}</Text>
      </ImageBackground>
    )
  }

  return (
    <View>
      <Image source={icon} tintColor="#88b5db" />
    </View>
  )
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 50,
          marginBottom: 36,
          height: 72,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          // title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          // title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          // title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          // title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile"  />
          )
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({
  pillContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 50,
    marginTop: 26,
  }
})