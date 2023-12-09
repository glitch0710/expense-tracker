import { View, StyleSheet, Image } from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Header from "../components/Header";

const Dashboard = (props) => {
  const theme = useTheme();
  const navigations = useNavigation();

  const handleLogout = () => {
    navigations.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Header />
      <Button
        style={styles.buttonStyle}
        buttonColor={theme.colors.onCustom1}
        textColor={theme.colors.onBackground}
        icon="exit-run"
        mode="contained"
        onPress={() => handleLogout()}
      >
        Logout
      </Button>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 30,
    width: 300,
  },
});
