import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import BaseBodyText from '../components/UI/BaseBodyText'
import BaseTitleText from '../components/UI/BaseTitleText'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BaseTitleText>The Game is Over</BaseTitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.jpg')}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BaseBodyText>Number of rounds: {props.roundsNumber}</BaseBodyText>
      <BaseBodyText>Number was: {props.userNumber}</BaseBodyText>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
