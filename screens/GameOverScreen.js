import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import BaseBodyText from '../components/UI/BaseBodyText'
import BaseButton from '../components/UI/BaseButton'
import BaseTitleText from '../components/UI/BaseTitleText'
import colors from '../constants/colors'

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
      <View style={styles.resultContainer}>
        <BaseBodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BaseBodyText>
      </View>
      <BaseButton onPress={props.onRestart}>NEW GAME</BaseButton>
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
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
})
