import React from 'react'
import {Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native'

const City = () => {
    const {container, imageStyle, cityName, countryName} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageStyle}>
                <Text style={cityName}>London</Text>
                <Text style={countryName}>Uk</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageStyle: {
        flex: 1
    },
    cityName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    countryName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default City