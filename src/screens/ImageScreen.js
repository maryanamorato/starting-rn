import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                score={6}
                source={require('../../assets/forest.jpg')} 
                title="Forest"
            />

            <ImageDetail 
                score={8}
                source={require('../../assets/beach.jpg')} 
                title="Beach"
            />

            <ImageDetail 
                score={9}
                source={require('../../assets/mountain.jpg')} 
                title="Mountain"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;