import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { useTheme, Text, Button, TextInput } from "react-native-paper";

const RegisterForm = ({ navigation }) => {
  const theme = useTheme();

  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.debug(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            outlineColor={theme.colors.secondary}
            style={styles.textInput}
            label="Enter Username"
            mode="outlined"
            onBlur={handleBlur("username")}
            value={values.username}
            onChangeText={handleChange("username")}
          />
          <TextInput
            outlineColor={theme.colors.secondary}
            style={{ ...styles.textInput, marginTop: 10 }}
            label="Set Password"
            mode="outlined"
            value={values.password}
            onBlur={handleBlur("password")}
            secureTextEntry={hidePass ? true : false}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => setHidePass(!hidePass)}
              />
            }
            onChangeText={handleChange("password")}
          />
          <TextInput
            outlineColor={theme.colors.secondary}
            style={{ ...styles.textInput, marginTop: 10 }}
            label="Confirm Password"
            mode="outlined"
            value={values.confirmPassword}
            onBlur={handleBlur("confirmPassword")}
            secureTextEntry={hideConfirmPass ? true : false}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => setHideConfirmPass(!hideConfirmPass)}
              />
            }
            onChangeText={handleChange("confirmPassword")}
          />
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            buttonColor="#2E98DB"
            icon="account-multiple-plus"
            mode="contained"
            onPress={handleSubmit}
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
      )}
    </Formik>
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
