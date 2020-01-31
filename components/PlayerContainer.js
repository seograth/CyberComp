import React from "react";
import { View, TextInput, Text } from "react-native";
import { usePlayer, playerEdit, useActions } from "../store";

export function PlayerContainer(props) {

  const player = usePlayer(props.player);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue"
      }}
    >
      <Text>{props.player}:</Text>
      <Text> {player}</Text>
    </View>
  );
}
