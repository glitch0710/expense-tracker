import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  useTheme,
  Text,
  Button,
  TextInput,
  HelperText,
} from "react-native-paper";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import * as Yup from "yup";
import { Formik } from "formik";

const ResetPasswordForm = ({ navigation }) => {
  const theme = useTheme();
  // const [email, setEmail] = useState("");

  const loginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  const resetPasswordSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
  });

  const initialValues = {
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await sendPasswordResetEmail(auth, values.email)
          .then(() => {
            alert(
              "Password reset email has been sent! Please check your email."
            );
          })
          .catch((error) => {
            alert(error.code, ": ", error.message);
          });
        navigation.pop()
      }}
      validationSchema={resetPasswordSchema}
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
            label="Enter Email"
            mode="outlined"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && (
            <HelperText>{errors.email}</HelperText>
          )}
          <Button
            style={styles.buttonStyle}
            buttonColor="#DBD92E"
            icon="lock-reset"
            mode="contained"
            onPress={handleSubmit}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Send Reset Instructions
          </Button>
          <Button
            style={{ ...styles.buttonStyle, marginTop: 15 }}
            icon="login"
            mode="outline"
            onPress={() => loginHandler()}
            disabled={isSubmitting}
          >
            Back to login
          </Button>
        </View>
      )}
    </Formik>
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
