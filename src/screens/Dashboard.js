import { View, StyleSheet, Image } from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Header from "../components/Header";
import ExpenseForm from "../forms/ExpenseForm";
import { auth } from "../../firebase";

const Dashboard = (props) => {
  const theme = useTheme();
  const navigations = useNavigation();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigations.reset({
          index: 0,
          routes: [{ name: "LandingScreen" }],
        });
      })
      .catch((error) => alert(error.code, ": ", error.message));
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Header />
      <Text>User logged in: {auth.currentUser?.email}</Text>
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
      <ExpenseForm />
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
