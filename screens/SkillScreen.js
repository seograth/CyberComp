import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SkillContainer } from "../components/SkillContainer";
import { useSkills } from "../store";

export default function SkillScreen() {
  
  const skills = useSkills();
  const [skillsT, setSkillsT] = useState([]);

  useEffect(() => {

    const skillKeys = Object.keys(skills);

    setSkillsT([
      skillKeys.slice(0, Math.ceil(skillKeys.length / 2)),
      skillKeys.slice(Math.ceil(skillKeys.length / 2), skillKeys.length)
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {skillsT.map((col, i) => (
        <View key={i} style={{ borderWidth: 1, borderColor: "red" }}>
          {col.map(row => (
            <SkillContainer key={row} skill={row} />
          ))}
        </View>
      ))}
    </View>
  );
}

SkillScreen.navigationOptions = {
  title: "Skills"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly",
    marginTop: 27
  },
  skillContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: "#ff0000",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginHorizontal: 20
  },
  text: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#ff0000",
    fontSize: 15,
    paddingLeft: 5
  },
  textInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#000"
  }
});
