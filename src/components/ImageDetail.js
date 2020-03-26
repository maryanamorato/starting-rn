import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ImageDetail = ({source, title, score}) => {
    return (
        <View>
            <Image source={source}/>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>

        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;