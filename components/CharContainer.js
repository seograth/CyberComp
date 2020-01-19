import React from "react";
import { View, TextInput, Text } from "react-native";
import { useChar, charEdit, useActions } from "../store";

export function CharContainer(props) {
    
  const char = useChar(props.char);

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
      <Text>{props.char}:</Text>
      <Text>{char}</Text>
    </View>
  );
}
