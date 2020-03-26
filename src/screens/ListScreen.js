import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: 25},
        {name: 'friend #2', age: 65},
        {name: 'friend #3', age: 12},
        {name: 'friend #4', age: 21}
    ]    
    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text>{item.name} - Age {item.age}</Text>
            }}
        />
        )
}

const styles = StyleSheet.create({})

export default ListScreen