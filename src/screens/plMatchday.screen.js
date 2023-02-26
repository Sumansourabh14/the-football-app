import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import matchdayObject from "../content/plMatchday.json";
import { fontSizes } from "../styles/fonts/fonts";
import { SvgUri } from "react-native-svg";

const PlMatchday = () => {
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 20,
        }}
      >
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
        <View
          style={{
            marginTop: 20,
          }}
        >
          {matchdayObject.matches
            ? matchdayObject.matches.map((match) => (
                <View
                  key={match.id}
                  style={[styles.individualMatch, styles.individualMatchShadow]}
                >
                  <View style={styles.scoreSheet}>
                    <View style={styles.homeClubStyles}>
                      <Text style={styles.clubName}>
                        {match.homeTeam.shortName}
                      </Text>
                      {match.homeTeam.crest.includes(".svg") ? (
                        <SvgUri
                          uri={match.homeTeam.crest}
                          width={30}
                          height={30}
                          style={{ marginHorizontal: 6 }}
                        />
                      ) : (
                        <Image
                          source={{ uri: match.homeTeam.crest }}
                          style={styles.crest}
                          alt={match.homeTeam.name}
                        />
                      )}
                    </View>
                    <View style={styles.finalScoreContainer}>
                      <Text style={styles.finalScore}>
                        {match.score.fullTime.home}
                      </Text>
                      <Text style={styles.finalScore}> : </Text>
                      <Text style={styles.finalScore}>
                        {match.score.fullTime.away}
                      </Text>
                    </View>
                    <View style={styles.awayClubStyles}>
                      {match.awayTeam.crest.includes(".svg") ? (
                        <SvgUri
                          uri={match.awayTeam.crest}
                          width={30}
                          height={30}
                          style={{ marginHorizontal: 6 }}
                        />
                      ) : (
                        <Image
                          source={{ uri: match.awayTeam.crest }}
                          style={styles.crest}
                          alt={match.awayTeam.name}
                        />
                      )}
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
      </View>
    </ScrollView>
  );
};

export default PlMatchday;

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  homeClubStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  awayClubStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  emblem: {
    height: 40,
    width: 80,
  },
  crest: {
    height: 30,
    width: 30,
    marginHorizontal: 6,
  },
  individualMatch: {
    backgroundColor: "#FEFBF6",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  individualMatchShadow: {
    elevation: 2,
    shadowColor: "#000",
    marginHorizontal: 2,
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
  finalScoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 6,
  },
});
