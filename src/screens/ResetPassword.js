import { View, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useTheme } from "react-native-paper";

const ResetPassword = () => {
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.onPrimary }}
    >
      <Header />
    </View>
  );
};

export default ResetPassword;

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
  