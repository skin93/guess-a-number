import React from 'react'
import { StyleSheet, Text } from 'react-native'

const BaseBodyText = (props) => {
  return <Text style={styles.body}>{props.children}</Text>
}

export default BaseBodyText

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
})
