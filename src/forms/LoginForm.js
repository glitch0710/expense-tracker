import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme, Text, Button, TextInput } from "react-native-paper";

const LoginForm = ({ navigation }) => {
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const registerHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  const resetPasswordHandler = () => {
    navigation.navigate("ResetPassword");
  };

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
        secureTextEntry={hidePass ? true : false}
        right={
          <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
        }
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
      <Button
        style={{ ...styles.buttonStyle, marginTop: 15 }}
        icon="account-multiple-plus"
        mode="outline"
        onPress={() => registerHandler()}
      >
        Don't have an account yet?
      </Button>
      <Button
        style={{ ...styles.buttonStyle, marginTop: 0 }}
        icon="lock-reset"
        mode="outline"
        onPress={() => resetPasswordHandler()}
      >
        Forgot Password
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