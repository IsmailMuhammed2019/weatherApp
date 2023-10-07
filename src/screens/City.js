import React from 'react'
import {Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'

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
        flex: 1
    },
    imageStyle: {
        flex: 1
    }
})

export default City