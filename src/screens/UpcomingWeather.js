import React from "react";
import { ImageBackground, Text, StyleSheet, SafeAreaView, FlatList, StatusBar} from "react-native"
import ListItems from "../components/ListItems";

const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 9.22,
            temp_min: 6.39
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 12.23,
            temp_min: 10.54
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItems 
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return(
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground source={require('../../assets/cloud.jpg')} style={styles.image}>
                    <Text>Upcoming Weather</Text>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.dt_txt} 
                    />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    container: {
        flex: 1,
    },

    image: {
        flex: 1
    }
})
export default UpcomingWeather