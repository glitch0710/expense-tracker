import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import {
  useTheme,
  Text,
  Button,
  TextInput,
  HelperText,
} from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, app } from "../../firebase";

const LoginForm = ({ navigation }) => {
  const theme = useTheme();
  const navigations = useNavigation();

  const [hidePass, setHidePass] = useState(true);

  const registerHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  const resetPasswordHandler = () => {
    navigation.navigate("ResetPassword");
  };

  const userLoginHandler = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.debug("Logged in with user:", user.email);
        navigations.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
      })
      .catch((error) => {
        alert(error.code, ": ", error.message);
      })
  };

  const landingHandler = () => {
    navigation.navigate("LandingScreen");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={ async (values) => {
        await userLoginHandler(values);
      }}
      validationSchema={loginSchema}
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
            label="Email"
            mode="outlined"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={values.email}
          />
          {errors.email && touched.email && (
            <HelperText>{errors.email}</HelperText>
          )}
          <TextInput
            outlineColor={theme.colors.secondary}
            style={{ ...styles.textInput, marginTop: 10 }}
            label="Password"
            mode="outlined"
            value={values.password}
            onBlur={handleBlur("password")}
            error={values.password}
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
          <Button
            style={styles.buttonStyle}
            buttonColor="#DBD92E"
            icon="login"
            mode="contained"
            disabled={isSubmitting}
            loading={isSubmitting}
            onPress={handleSubmit}
          >
            Login
          </Button>
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            buttonColor="#2E98DB"
            icon="arrow-left-bold-box-outline"
            mode="contained"
            disabled={isSubmitting}
            loading={isSubmitting}
            onPress={() => landingHandler()}
          >
            Back
          </Button>
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            icon="account-multiple-plus"
            mode="outline"
            onPress={() => registerHandler()}
            disabled={isSubmitting}
          >
            Don't have an account yet?
          </Button>
          <Button
            style={{ ...styles.buttonStyle, marginTop: 0 }}
            icon="lock-reset"
            mode="outline"
            onPress={() => resetPasswordHandler()}
            disabled={isSubmitting}
          >
            Forgot Password
          </Button>
        </View>
      )}
    </Formik>
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
