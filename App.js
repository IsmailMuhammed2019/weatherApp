import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native"

const App = () => {
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{color: "#fff", margin: 20}}>This is my test weather app</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "skyblue"
  }
})
export default App;