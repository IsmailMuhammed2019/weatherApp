import React from "react";
import { View, Text, StyleSheet} from "react-native"

const UpcomingWeather = () => {
    return(
        <View style={styles.container}>
            <Text>The current upcoming weather</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default UpcomingWeather