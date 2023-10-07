import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native"

const App = () => {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>This is my test weather app</Text>
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
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "900",
    fontSize: '100',
    color: '#fff'
  }
})
export default App;