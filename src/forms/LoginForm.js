import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme, Text, Button, TextInput } from "react-native-paper";

const LoginForm = () => {
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        outlineColor={theme.colors.secondary}
        style={{ ...styles.textInput, marginTop: 10 }}
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        style={styles.buttonStyle}
        buttonColor="#DBD92E"
        icon="login"
        mode="contained"
        onPress={() => console.debug("Pressed")}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: 300,
  },
  buttonStyle: {
    marginTop: 40,
  },
});
