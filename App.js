import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native"

const App = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>

        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <Text style={styles.highLow}>High: 8 Low: 6</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  wrapper: {
    flex: '1'
  },
  container: {
    backgroundColor: "skyblue",
    flex: '1',
    alignItems: "center"
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
  }
})
export default App;