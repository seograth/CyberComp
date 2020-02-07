import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import {  } from "";
// import {  } from "../store";

export default function ItemScreen() {
  

  return (
    <View> 
        <Text>Hi</Text>
    </View>
  )
}

ItemScreen.navigationOptions = {
  title: 'Item',
};

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
});