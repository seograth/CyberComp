import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import * as SQLite from 'expo-sqlite';

import { PlayerContainer } from "../components/PlayerContainer";
import { usePlayer } from "../store";

// const db = SQLite.openDatabase(redDB);

export default function CombatScreen() {
  
  const player = usePlayer();
  const [playerT, setPlayerT] = useState([]);

  useEffect(() => {

    const playerKeys = Object.keys(player);

    setPlayerT([
      playerKeys
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {playerT.map((row, i) => (
        <View key={i} style={{ borderWidth: 1, borderColor: "red" }}>
          {row.map(col => (
            <PlayerContainer key={col} player={col} />
          ))}
        </View>
      ))}
    </View>
  )
}

CombatScreen.navigationOptions = {
  title: 'Combat',
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