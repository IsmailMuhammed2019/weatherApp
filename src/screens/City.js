import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native'
import IconText from '../components/IconText';
const City = () => {
    const {sunStatus, sunrise, container, imageStyle, cityName, countryName, cityText, population, populationText} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageStyle}>
                <Text style={[cityName, cityText ]}>Germany</Text>
                <Text style={[countryName, cityText]}>Uk</Text>
                <View style={population}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8,000'}/>
                </View>
                <View style={sunStatus}>
                    <IconText iconName={'sunrise'} iconColor={'black'} bodyText={'10:46:58am'} bodyTextStyles={sunrise} />
                    <IconText iconName={'sunset'} iconColor={'black'} bodyText={'17:28:15am'} bodyTextStyles={sunrise} />
                </View>

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
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },

    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    population: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    sunStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    sunrise: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default City