import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { useTheme, Text, Button } from "react-native-paper";

const LandingScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.onPrimary }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 300, height: 100 }}
      />
      <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
        Track your expenses easily
      </Text>

      <Button
        style={styles.buttonStyle}
        buttonColor="#DBD92E"
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
      <Button
        style={{...styles.buttonStyle, marginTop: 15}}
        buttonColor="#DBD92E"
        icon="account-multiple-plus"
        mode="contained"
        onPress={() => console.log("Pressed")}
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
