import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>

        <View style={styles.skillContainer}>
          <Text style={styles.text}>Perception(INT):</Text>
          <Text style={styles.text}>Tracking(INT):</Text>
          <Text style={styles.text}>Education(INT):</Text>
          <Text style={styles.text}>Local Expert(INT):</Text>
          <Text style={styles.text}>Interface(-):</Text>
          <Text style={styles.text}>Marksmanship(REF):</Text>
          <Text style={styles.text}>Driving(REF):</Text>
          <Text style={styles.text}>Evasion(DEX):</Text>
          <Text style={styles.text}>Athletics(DEX):</Text>
          <Text style={styles.text}>Stealth(DEX):</Text>
          <Text style={styles.text}>Brawling(DEX):</Text>
          <Text style={styles.text}>Melee Weapon(DEX):</Text>
          <Text style={styles.text}>Basic Tech(TECH):</Text>
          <Text style={styles.text}>CyberTech(TECH):</Text>
          <Text style={styles.text}>First Aid(TECH):</Text>
          <Text style={styles.text}>Bribery(COOL):</Text>
          <Text style={styles.text}>Interrogation(COOL):</Text>
          <Text style={styles.text}>Persuasion(COOL):</Text>
          <Text style={styles.text}>Evasion(WILL):</Text>
          <Text style={styles.text}>Athletics(EMP):</Text>
          <Text style={styles.text}>Stealth(EMP):</Text>
          <Text style={styles.text}>Brawling(EMP):</Text>
        </View>

        <View style={styles.skillContainer}>
          <Text style={styles.text}>Perception(INT):</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}

SkillScreen.navigationOptions = {
  title: "Skills"
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
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
