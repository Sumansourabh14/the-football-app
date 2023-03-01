import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}>Profile screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
