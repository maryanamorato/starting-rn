import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>BoxScreen #1</Text>
            <Text style={styles.textStyleTwo}>BoxScreen #2</Text>
            <Text style={styles.textStyleThree}>BoxScreen #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyleOne: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textStyleTwo: {
        borderWidth: 3,
        borderColor: 'red',
        top: 15
    },
    textStyleThree: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;