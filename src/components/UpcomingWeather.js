import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar} from "react-native"
import { Feather } from '@expo/vector-icons';

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

const Item = (props) => {
    const {dt_txt, min, max, condition} = props
    return (
        <View style={styles.items}>
            <Feather name={"sun"} size={50} color={"black"} />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item 
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return(
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt} 
                />
            </View>
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
    }
})
export default UpcomingWeather