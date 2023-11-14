import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { useTheme, Text, Button } from "react-native-paper";
import Header from "../components/Header";

const LandingScreen = ({ navigation }) => {
  const theme = useTheme();

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const registerHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.onPrimary }}
    >
      <Header />
      <Button
        style={styles.buttonStyle}
        buttonColor="#DBD92E"
        icon="login"
        mode="contained"
        onPress={() => loginHandler()}
      >
        Login
      </Button>
      <Button
        style={{ ...styles.buttonStyle, marginTop: 15 }}
        buttonColor="#2E98DB"
        icon="account-multiple-plus"
        mode="contained"
        onPress={() => registerHandler()}
      >
        Register
      </Button>
    </View>
  );
};

export default LandingScreen;

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
