import React from "react";
import { View, TextInput, Text } from "react-native";
import { useSkills, skillEdit, useActions } from "../store";

export function SkillContainer(props) {

  const skill = useSkills(props.skill);

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
      <Text>{props.skill}:</Text>
      <Text> {skill}</Text>
    </View>
  );
}
