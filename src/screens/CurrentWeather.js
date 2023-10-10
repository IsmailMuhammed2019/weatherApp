import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message } = styles
  return(
    <SafeAreaView style={wrapper}>
      <View style={container}>
      <Feather name="sun" size={100} alignItems="center" color="yellow" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageTwo={'Low: 6'} messageOneStyle={highLow} messageTwoStyle={highLow} containerStyle={highLowWrapper} />
      </View>
      <RowText messageOne={'Its Sunny'} messageTwo={'Its perfect t-shirt weather'} messageOneStyle={description} messageTwoStyle={message} containerStyle={bodyWrapper} />
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