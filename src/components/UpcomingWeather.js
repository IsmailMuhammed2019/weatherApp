import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from "react-native"

const UpcomingWeather = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>The current upcoming weather</Text>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default UpcomingWeather