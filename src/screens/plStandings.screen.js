import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tableData from "../content/plStandings.json";
import { fontSizes } from "../styles/fonts";
import { SvgUri } from "react-native-svg";

const PlStandings = () => {
  return (
    <View
      style={{
        paddingTop: 600,
      }}
    >
      <Image
        source={{ uri: tableData.competition.emblem }}
        style={styles.leagueEmblem}
      />
      <Text style={styles.leagueTitle}>{tableData.competition.name}</Text>
      <Text style={styles.leagueCountry}>{tableData.area.name}</Text>

      <View>
        {tableData.standings[0].type === "TOTAL" ? (
          tableData.standings[0].table.map((team) => (
            <View>
              <Text>{team.position}</Text>
              <Text>{team.team.name}</Text>
              {team.team.crest.includes(".svg") ? (
                <SvgUri
                  uri={team.team.crest}
                  width={30}
                  height={30}
                  style={{ marginHorizontal: 0 }}
                />
              ) : (
                <Image
                  source={{ uri: team.team.crest }}
                  style={styles.crest}
                  alt={team.team.name}
                />
              )}
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </View>
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
  crest: {
    height: 30,
    width: 30,
    marginHorizontal: 6,
  },
});
