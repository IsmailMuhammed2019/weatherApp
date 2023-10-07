import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} alignItems="center" color="yellow" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  wrapper: {
    backgroundColor: "#e3e3e3",
    flex: '1'
  },
  container: {

    flex: '1',
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 40,
    paddingLeft: 25
  },
  description: {
    fontSize: 40,
  },
  message: {
    fontSize: 30

  }
})
export default CurrentWeather;