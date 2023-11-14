import { View, StyleSheet, Image } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
import LoginForm from "../forms/LoginForm";
import Header from "../components/Header";

const LoginScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.onPrimary }}
    >
      <Header />
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

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
