import React, { useReducer } from 'react';
import {Text, View, StyleSheet, Button} from "react-native";

const reducer = (state, action) => {
    switch(action.type){
        case 'toIncrease':
            return { ...state, counter: state.counter + action.payload}; 
        case 'toDecrease':
            return  { ...state, counter: state.counter - action.payload}; 
        default:
            return state;
    }
}

const VALUE = 1;

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    return(
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    //setCounter(counter + 1);
                    dispatch({type: 'toIncrease', payload: VALUE})
                }}
            />
            
            <Button 
                title="Decrease" 
                onPress = {() => {
                    //setCounter(counter - 1);
                    dispatch({type: 'toDecrease', payload: VALUE})
                }}
            />

            <Text>Current Count: {state.counter} </Text>
        </View>
    )
} 

style = StyleSheet.create({});

export default CounterScreen;