import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import matchdayObject from "../content/plMatchday.json";
import { fontSizes } from "../styles/fonts/fonts";

const PlMatchday = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.flexContainer}>
        <Image
          source={{ uri: matchdayObject.competition.emblem }}
          style={styles.emblem}
        />
        <View style={{ marginLeft: 16 }}>
          <View style={styles.flexContainer}>
            <Text
              style={{
                marginRight: 4,
                fontWeight: "bold",
                fontSize: fontSizes.s4,
              }}
            >
              {matchdayObject.competition.name}
            </Text>
            {/* <Text>
              {matchdayObject.filters.season}/
              {parseInt(matchdayObject.filters.season) + 1}
            </Text> */}
          </View>
          <Text>Matchday {matchdayObject.filters.matchday}</Text>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        {matchdayObject.matches
          ? matchdayObject.matches.map((match) => (
              <View key={match.id} style={styles.individualMatch}>
                <View style={styles.scoreSheet}>
                  <View style={styles.flexContainer}>
                    <Text style={styles.clubName}>
                      {match.homeTeam.shortName}
                    </Text>
                    <Image
                      source={{ uri: match.homeTeam.crest }}
                      style={styles.crest}
                    />
                    <Text style={styles.finalScore}>
                      {match.score.fullTime.home}
                    </Text>
                  </View>
                  <Text style={styles.finalScore}> : </Text>
                  <View style={styles.flexContainer}>
                    <Text style={styles.finalScore}>
                      {match.score.fullTime.away}
                    </Text>
                    <Image
                      source={{ uri: match.awayTeam.crest }}
                      style={styles.crest}
                    />
                    <Text style={styles.clubName}>
                      {match.awayTeam.shortName}
                    </Text>
                  </View>
                </View>

                <View>{match.score.winner ? <Text>FT</Text> : ""}</View>
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
    alignItems: "center",
  },
  emblem: {
    height: 40,
    width: 80,
  },
  crest: {
    height: 30,
    width: 30,
    marginHorizontal: 4,
  },
  individualMatch: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  scoreSheet: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  marginRight: {
    marginRight: 4,
  },
  clubName: {
    fontSize: fontSizes.s2,
    marginHorizontal: 6,
  },
  finalScore: {
    fontSize: fontSizes.s3,
    fontWeight: "bold",
  },
});
