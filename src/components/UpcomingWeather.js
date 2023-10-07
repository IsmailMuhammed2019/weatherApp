import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from "react-native"

const UpcomingWeather = () => {
    return(
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>The current upcoming weather</Text>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
    }
})
export default UpcomingWeather