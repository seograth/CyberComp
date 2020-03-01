import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Button, Image } from "react-native";
import logo from '../assets/images/logo-red.png';

export default function EntryScreen(props) {
  
  const showMoreApp = () => {
    props.navigation.navigate('New');
  };

  return (    
    <View> 
        <Image source={logo} style={styles.stretch}/>
        <Button title="CHOOMBA...Create New Character " onPress={showMoreApp} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly",
    marginTop: 27
  },
  PlayerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: "#ff0000",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginHorizontal: 20
  },
  stretch: {
    width: '100%',
    height: '40%'
  }
});