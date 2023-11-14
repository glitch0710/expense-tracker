import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useTheme } from "react-native-paper";
import RegisterForm from "../forms/RegisterForm";

const RegisterScreen = (props) => {
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.onPrimary }}
    >
      <Header />
      <RegisterForm {...props} />
    </View>
  );
};

export default RegisterScreen;

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
