import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useChar } from '../store';
import { MonoText } from '../components/StyledText';
import { CharContainer } from '../components/CharContainer';

export default function CharScreen() {

  const char = useChar();
  const [charT, setCharT] = useState([]);

  useEffect(() => {

    const charKeys = Object.keys(char);

    setCharT([
      charKeys.slice(0, Math.ceil(charKeys.length / 2)),
      charKeys.slice(Math.ceil(charKeys.length / 2), charKeys.length)
    ]);
  }, []);


  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
        {charT.map((col, i) => (
          <View key={i} style={{ borderWidth:1, borderColor: "red" }}>
            {col.map(row => (
              <CharContainer key={row} char={row} />
            ))}
            </View>
        ))}
      </View>

    </View>
  );
}

CharScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly",
    marginTop: 27
  },
  CharContainer: {
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
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 400,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  CharScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
