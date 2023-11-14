import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme, Text, Button, TextInput } from "react-native-paper";

const RegisterForm = ({ navigation }) => {
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View>
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Enter Username"
        mode="outlined"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        outlineColor={theme.colors.secondary}
        style={{ ...styles.textInput, marginTop: 10 }}
        label="Set Password"
        mode="outlined"
        value={password}
        secureTextEntry={hidePass ? true : false}
        right={
          <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
        }
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        outlineColor={theme.colors.secondary}
        style={{ ...styles.textInput, marginTop: 10 }}
        label="Confirm Password"
        mode="outlined"
        value={confirmPassword}
        secureTextEntry={hideConfirmPass ? true : false}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setHideConfirmPass(!hideConfirmPass)}
          />
        }
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
      />
      <Button
        style={{ ...styles.buttonStyle, marginTop: 15 }}
        buttonColor="#2E98DB"
        icon="account-multiple-plus"
        mode="contained"
        onPress={() => console.debug("Pressed")}
      >
        Register
      </Button>
      <Button
        style={{ ...styles.buttonStyle, marginTop: 15 }}
        icon="login"
        mode="outline"
        onPress={() => loginHandler()}
      >
        Already have an account
      </Button>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: 300,
  },
  buttonStyle: {
    marginTop: 40,
  },
});
