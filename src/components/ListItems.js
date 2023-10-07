import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ListItems = (props) => {
    const {dt_txt, min, max, condition} = props
    return (
        <View style={styles.items}>
            <Feather name={"sun"} size={50} color={"yellow"} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    items: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        borderWidth: 2,
        backgroundColor: 'skyblue'
    },
    temp: {
        color: "white",
        fontSize: 30
    },
    date: {
        color: "white",
        fontSize: 20
    }
})
export default ListItems