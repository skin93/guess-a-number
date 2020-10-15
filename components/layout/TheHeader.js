import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'
import BaseTitleText from '../UI/BaseTitleText'

const TheHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <BaseTitleText style={styles.headerTitle}>{title}</BaseTitleText>
    </View>
  )
}

export default TheHeader

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 0,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
