import React, { useState, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DefaultStyles from '../constants/default-styles'

import NumberContainer from '../components/UI/NumberContainer'
import BaseCard from '../components/UI/BaseCard'
import BaseButton from '../components/UI/BaseButton'
import BaseBodyText from '../components/UI/BaseBodyText'

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * (max - min) + min)

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

// option 1 - ScrollView
// const renderListItem = (value, numOfRound) => (
//   <View key={value} style={styles.listItem}>
//     <BaseBodyText>#{numOfRound}</BaseBodyText>
//     <BaseBodyText>{value}</BaseBodyText>
//   </View>
// )

// option 2 - FlatList
const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BaseBodyText>#{listLength - itemData.index}</BaseBodyText>
    <BaseBodyText>{itemData.item}</BaseBodyText>
  </View>
)

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  // option 1 - ScrollView
  // const [pastGuesses, setPastGuesses] = useState([initialGuess])

  // option 2 - FlatList
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()])

  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  const { userChoice, onGameOver } = props

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess + 1
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    // option 1 - ScrollView
    // setPastGuesses((currPastGuesses) => [nextNumber, ...currPastGuesses])

    // option 2 - FlatList
    setPastGuesses((currPastGuesses) => [
      nextNumber.toString(),
      ...currPastGuesses,
    ])
  }

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <BaseCard style={styles.buttonContainer}>
        <BaseButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='md-remove' size={24} color='white' />
        </BaseButton>
        <BaseButton onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name='md-add' size={24} color='white' />
        </BaseButton>
      </BaseCard>
      <View style={styles.listContainer}>
        {/* option 1 - scrollView */}
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}

        {/* option 2 - FlatList */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})
