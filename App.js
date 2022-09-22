import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Search from "./src/components/Search";

export default function App() {
  const [searchQuery, setQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search setQuery={setQuery} />
      </View>
      <View style={styles.body}>
        <Text>You searching for {searchQuery ? searchQuery : "nothing"}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  search: {
    alignSelf: "stretch",
    padding: 10,
  },
});
