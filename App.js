import React from "react";
import {View, Text, SafeAreaView} from "react-native"

const App = () => {
  return(
    <SafeAreaView>
      <View style={{backgroundColor: 'orange'}}>
        <Text style={{color: "#fff", margin: 20}}>This is my test weather app</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;