import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import {
  useTheme,
  Text,
  Button,
  TextInput,
  HelperText,
} from "react-native-paper";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../../firebase";

const RegisterForm = ({ navigation }) => {
  const theme = useTheme();
  const navigations = useNavigation();

  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const registerSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please set your email"),
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
      onSubmit={async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.debug(user.email);
          })
          .catch((error) => alert(error.code, ": ", error.message));
      }}
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
            label="Set Email"
            mode="outlined"
            onBlur={handleBlur("email")}
            value={values.email}
            onChangeText={handleChange("email")}
          />
          {errors.email && touched.email && (
            <HelperText>{errors.email}</HelperText>
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
