import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useTheme, Text, Button, TextInput } from "react-native-paper";

const ResetPasswordForm = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View>
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Enter Email"
        mode="outlined"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Button
        style={styles.buttonStyle}
        buttonColor="#DBD92E"
        icon="lock-reset"
        mode="contained"
        onPress={() => console.debug("Pressed")}
      >
        Send Reset Instructions
      </Button>
      <Button
        style={{ ...styles.buttonStyle, marginTop: 15 }}
        icon="login"
        mode="outline"
        onPress={() => loginHandler()}
      >
        Back to login
      </Button>
    </View>
  );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: 300,
  },
  buttonStyle: {
    marginTop: 20,
  },
});
