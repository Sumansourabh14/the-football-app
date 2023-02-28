import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SvgUri } from "react-native-svg";
import tableData from "../content/plStandings.json";
import { fontSizes } from "../styles/fonts";
const { width, height } = Dimensions.get("window");

const PlStandings = () => {
  return (
    <ScrollView>
      <View style={[styles.container, { marginTop: 0 }]}>
        <Image
          source={{ uri: tableData.competition.emblem }}
          style={styles.leagueEmblem}
        />
        <Text style={styles.leagueTitle}>{tableData.competition.name}</Text>
        <Text style={styles.leagueCountry}>{tableData.area.name}</Text>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 360,
            backgroundColor: "#E5E5CB",
            paddingVertical: 4,
          }}
        >
          <View style={{ flexDirection: "row", flex: 2.5 }}>
            {/* <Text style={styles.clubStats}>P</Text>
              <Text style={{ textAlign: "center", width: "100%" }}>Club</Text> */}
          </View>
          <View style={{ flexDirection: "row", flex: 1.55 }}>
            <Text style={styles.clubStats}>P</Text>
            <Text style={styles.clubStats}>W</Text>
            <Text style={styles.clubStats}>D</Text>
            <Text style={styles.clubStats}>L</Text>
            <Text style={styles.clubStats}>Pt</Text>
          </View>
        </View>
        <View style={[styles.standings, { marginTop: 10 }]}>
          {tableData.standings[0].type === "TOTAL" ? (
            tableData.standings[0].table.map((team) => (
              <View
                key={team.position}
                style={[styles.clubPositionLayout, styles.clubSpacing]}
              >
                <View style={{ flexDirection: "row", flex: 2.5 }}>
                  <Text
                    style={{ marginRight: 10, width: 20, textAlign: "center" }}
                  >
                    {team.position}
                  </Text>
                  {team.team.crest.includes(".svg") ? (
                    <SvgUri
                      uri={team.team.crest}
                      width={30}
                      height={30}
                      style={{ marginRight: 10 }}
                    />
                  ) : (
                    <Image
                      source={{ uri: team.team.crest }}
                      style={styles.crest}
                      alt={team.team.name}
                    />
                  )}
                  <Text>{team.team.shortName}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1.5,
                  }}
                >
                  <Text style={styles.clubStats}>{team.playedGames}</Text>
                  <Text style={styles.clubStats}>{team.won}</Text>
                  <Text style={styles.clubStats}>{team.draw}</Text>
                  <Text style={styles.clubStats}>{team.lost}</Text>
                  <Text style={[styles.clubStats]}>{team.points}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text></Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PlStandings;

const styles = StyleSheet.create({
  clubPositionLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    // width: width,
    // height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  standings: {
    width: 360,
    padding: 10,
  },
  clubSpacing: {
    marginBottom: 20,
  },
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
  crest: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  border: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 2,
  },
  clubStats: {
    marginLeft: 8,
    width: 18,
    textAlign: "center",
  },
});
