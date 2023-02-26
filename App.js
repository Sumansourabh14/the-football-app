import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PlMatchday from "./src/screens/plMatchday.screen";
import PlStandings from "./src/screens/plStandings.screen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 24 }}>The Football App!</Text> */}
      <StatusBar style="auto" />
      {/* <PlMatchday /> */}
      <PlStandings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
