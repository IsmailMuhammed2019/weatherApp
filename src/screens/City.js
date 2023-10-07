import React from 'react'
import {Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native'

const City = () => {
    const {container, imageStyle} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageStyle}>

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
    }
})

export default City