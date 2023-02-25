import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import matchdayObject from "../content/plMatchday.json";

const PlMatchday = () => {
  return (
    <View>
      <View style={styles.flexContainer}>
        <Image
          source={{ uri: matchdayObject.competition.emblem }}
          style={styles.emblem}
        />
        <View style={{ marginLeft: 16 }}>
          <View style={styles.flexContainer}>
            <Text style={{ marginRight: 4 }}>
              {matchdayObject.competition.name}
            </Text>
            <Text>
              {matchdayObject.filters.season}/
              {parseInt(matchdayObject.filters.season) + 1}
            </Text>
          </View>
          <Text>Matchday {matchdayObject.filters.matchday}</Text>
        </View>
      </View>

      <View>
        {matchdayObject.matches
          ? matchdayObject.matches.map((match) => (
              <View style={styles.individualMatch}>
                <View>
                  <Text>{match.homeTeam.shortName}</Text>
                </View>
                <View>
                  <Text>{match.awayTeam.shortName}</Text>
                </View>
              </View>
            ))
          : ""}
      </View>

      {/* <View>
        {matchdayObject.matches
          ? matchdayObject.matches.map((match) => (
              <View style={styles.individualMatch}>
                <Text>{match.homeTeam.name}</Text>
                <Text>{match.awayTeam.name}</Text>
              </View>
            ))
          : ""}
      </View> */}
    </View>
  );
};

export default PlMatchday;

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
  },
  emblem: {
    height: 40,
    width: 80,
  },
  individualMatch: {
    backgroundColor: "skyblue",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  marginRight: {
    marginRight: 4,
  },
});
