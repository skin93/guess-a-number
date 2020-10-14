import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TheHeader from './components/layout/TheHeader'

export default function App() {
  return (
    <View style={styles.screen}>
      <TheHeader title='Guess a Number' />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
