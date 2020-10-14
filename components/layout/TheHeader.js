import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TheHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default TheHeader

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 0,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
})
