import React, { useState } from 'react';
import { View, Text, Stylesheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('')
    return(
        <View>
            <Text>Enter your name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}    
                value={name}
                onChangeText={newValue => {setName(newValue)}}
            />
            <Text>Hi {name}</Text>
        </View>
    )
}

const styles = Stylesheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;