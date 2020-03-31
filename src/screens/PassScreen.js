import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from "react-native"

const PassScreen = () => {
    const [password, setPassword] = useState('')
    return(
        <View>
            <Text>Create a password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}    
                value={password}
                onChangeText={newPassword => {setPassword(newPassword)}}
            />
            {name.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default PassScreen