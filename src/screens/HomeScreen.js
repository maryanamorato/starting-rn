import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation}) => {
return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => {navigation.navigate('Components')}}
        title="Go to Components Screen :)"
        />

      <Button 
        onPress={() => {navigation.navigate('Lists')}}
        title="Go to Lists Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Image')}}
        title="Go to Image Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Counter')}}
        title="Go to Counter Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Color')}}
        title="Go to Color Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Square')}}
        title="Go to Square Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Text')}}
        title="Go to Text Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Pass')}}
        title="Go to Pass Screen :)"
      />

      <Button 
        onPress={() => {navigation.navigate('Box')}}
        title="Go to Box Screen :)"
      />

      <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
        <Text>Go to Lists Screen :D</Text>
      </TouchableOpacity>
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
