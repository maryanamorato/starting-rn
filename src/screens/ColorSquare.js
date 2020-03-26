import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const ColorSquare = () => {

    [red, setRed] = useState(0);
    [green, setGreen] = useState(0);
    [blue, setBlue] = useState(0);

    return(
        <View>
            <ColorCounter 
                color="Red" 
                onIncrease={() => setRed( red + 1 )} 
                onDecrease={() => setRed(red-1)}
            />

            <ColorCounter 
                color="Green" 
                onIncrease={() => setGreen( green + 1 )} 
                onDecrease={() => setGreen( green - 1 )}
            />

            <ColorCounter 
                color="Blue" 
                onIncrease={() => setBlue( blue + 1 )} 
                onDecrease={() => setBlue( blue - 1 )}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorSquare;