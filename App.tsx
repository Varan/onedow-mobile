import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/Routes';

// This file is just the index.tsx file from the common monorepo folder

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      <Routes></Routes>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F5FCFF',
    height: "100%"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "F5FCFF",
    width: "100%",
    maxWidth: 425
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});