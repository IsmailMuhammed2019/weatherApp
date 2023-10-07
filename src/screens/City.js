import React from 'react'
import {Text, SafeAreaView, StyleSheet } from 'react-native'

const City = () => {
    const {container} = styles
    return (
        <SafeAreaView style={container}>
            <Text>
                City
            </Text>
        </SafeAreaView>
    )
}

const styles = ({
    container : {
        flex: 1
    }
})