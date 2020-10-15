import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TheHeader from './components/layout/TheHeader'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
  }

  return (
    <View style={styles.screen}>
      <TheHeader title='Guess a Number' />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
