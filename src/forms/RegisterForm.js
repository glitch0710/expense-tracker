import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import {
  useTheme,
  Text,
  Button,
  TextInput,
  HelperText,
} from "react-native-paper";
import * as Yup from "yup";

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

  const registerSchema = Yup.object({
    username: Yup.string().required("Please set your username"),
    password: Yup.string()
      .required("Please set your password")
      .min(8, "Your password is too short"),
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.debug(values)}
      validationSchema={registerSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View>
          <TextInput
            outlineColor={theme.colors.secondary}
            style={styles.textInput}
            label="Set Username"
            mode="outlined"
            onBlur={handleBlur("username")}
            value={values.username}
            onChangeText={handleChange("username")}
          />
          {errors.username && touched.username && (
            <HelperText>{errors.username}</HelperText>
          )}
          <TextInput
            outlineColor={theme.colors.secondary}
            style={{ ...styles.textInput, marginTop: 10 }}
            label="Set Password"
            mode="outlined"
            value={values.password}
            onBlur={handleBlur("password")}
            secureTextEntry={hidePass ? true : false}
            right={
              hidePass ? (
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setHidePass(!hidePass)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setHidePass(!hidePass)}
                />
              )
            }
            onChangeText={handleChange("password")}
          />
          {errors.password && touched.password && (
            <HelperText>{errors.password}</HelperText>
          )}
          <TextInput
            outlineColor={theme.colors.secondary}
            style={{ ...styles.textInput, marginTop: 10 }}
            label="Confirm Password"
            mode="outlined"
            value={values.confirmPassword}
            onBlur={handleBlur("confirmPassword")}
            secureTextEntry={hideConfirmPass ? true : false}
            right={
              hideConfirmPass ? (
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setHideConfirmPass(!hideConfirmPass)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setHideConfirmPass(!hideConfirmPass)}
                />
              )
            }
            onChangeText={handleChange("confirmPassword")}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <HelperText>{errors.confirmPassword}</HelperText>
          )}
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            buttonColor="#2E98DB"
            icon="account-multiple-plus"
            mode="contained"
            disabled={isSubmitting}
            loading={isSubmitting}
            onPress={handleSubmit}
          >
            Register
          </Button>
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            icon="login"
            mode="outline"
            disabled={isSubmitting}
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
