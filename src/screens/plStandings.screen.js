import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tableData from "../content/plStandings.json";
import { fontSizes } from "../styles/fonts";

const PlStandings = () => {
  return (
    <View>
      <Image
        source={{ uri: tableData.competition.emblem }}
        style={styles.leagueEmblem}
      />
      <Text style={styles.leagueTitle}>{tableData.competition.name}</Text>
      <Text style={styles.leagueCountry}>{tableData.area.name}</Text>
    </View>
  );
};

export default PlStandings;

const styles = StyleSheet.create({
  leagueTitle: {
    fontSize: fontSizes.s4,
    fontWeight: "700",
  },
  leagueCountry: {
    fontSize: fontSizes.s3,
  },
  leagueEmblem: {
    height: 100,
    width: 100,
  },
});
