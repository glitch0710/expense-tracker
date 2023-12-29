import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, useTheme, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState } from "react";
import Header from "../components/Header";
import ExpenseForm from "../forms/ExpenseForm";
import { auth } from "../../firebase";
import Expenses from "../components/Expenses";

const Dashboard = (props) => {
  const theme = useTheme();
  const navigations = useNavigation();
  const [addMode, setAddMode] = useState(true);

  const handleUpdateData = (updateData) => {
    const { mode } = updateData;
    setAddMode(mode)
  };

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
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{
          ...styles.container,
          backgroundColor: theme.colors.background,
        }}
      >
        <ScrollView>
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
          <ExpenseForm addMode={addMode} updateData={handleUpdateData} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
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
