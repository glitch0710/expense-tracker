import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";
import {
  Button,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { fireAppDb } from "../../firebase";
import Expenses from "../components/Expenses";

const ExpenseForm = (props) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseId, setExpenseId] = useState("");
  const theme = useTheme();

  const handleUpdateData = (updateData) => {
    const { id, name, amount, date } = updateData;
    setExpenseId(id);

    setExpenseName(name);
    setExpenseAmount(amount);
    setExpenseDate(date);

    props.updateData(updateData);
  };

  const handleExpenseFormSubmit = async (values) => {
    const docData = {
      expense_amount: values.expenseAmount,
      expense_date: values.expenseDate,
      expense_name: values.expenseName,
    };

    if (props.addMode) {
      await addDoc(collection(fireAppDb, "expenses"), docData)
        .then(function () {
          alert("Expense successfully saved.");
        })
        .catch((error) => alert(error.code, ":", error.message));
    } else {
      await setDoc(doc(fireAppDb, "expenses", expenseId), docData)
        .then(() => {
          const updateData = {
            mode: true,
          };

          props.updateData(updateData);
          alert("Expense updated successfully");
        })
        .catch((error) => alert(error.code, ":", error.message));
    }
  };

  const initialValues = {
    expenseName: expenseName,
    expenseAmount: expenseAmount,
    expenseDate: expenseDate,
  };

  const expenseFormSchema = Yup.object().shape({
    expenseName: Yup.string().required("Please enter a valid expense name"),
    expenseAmount: Yup.string().matches(
      /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
      "Please enter a numerical value"
    ),
    expenseDate: Yup.string().required("Please enter a valid date"),
  });

  return (
    <KeyboardAvoidingView>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleExpenseFormSubmit(values);
          resetForm();
        }}
        validationSchema={expenseFormSchema}
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
            <Text
              style={{ textAlign: "center", marginTop: 10 }}
              variant="bodyLarge"
            >
              Expense Form
            </Text>
            <View style={styles.inlineComponents}>
              <TextInput
                outlineColor={theme.colors.secondary}
                style={styles.textInput}
                label="Enter expense name"
                mode="outlined"
                value={values.expenseName}
                onBlur={handleBlur("expenseName")}
                onChangeText={handleChange("expenseName")}
              />
              {errors.expenseName && touched.expenseName && (
                <HelperText>{errors.expenseName}</HelperText>
              )}
              <TextInput
                outlineColor={theme.colors.secondary}
                style={styles.textInput}
                label="Enter Amount"
                mode="outlined"
                value={values.expenseAmount}
                onBlur={handleBlur("expenseAmount")}
                onChangeText={handleChange("expenseAmount")}
              />
              {errors.expenseAmount && touched.expenseAmount && (
                <HelperText>{errors.expenseAmount}</HelperText>
              )}
              <TextInput
                outlineColor={theme.colors.secondary}
                style={styles.textInput}
                label="Enter Date (mm-dd-yyy)"
                mode="outlined"
                value={values.expenseDate}
                onBlur={handleBlur("expenseDate")}
                onChangeText={handleChange("expenseDate")}
              />
              {errors.expenseDate && touched.expenseDate && (
                <HelperText>{errors.expenseDate}</HelperText>
              )}
              <Button
                style={{ marginTop: 5 }}
                buttonColor={theme.colors.tertiaryContainer}
                mode="contained"
                textColor={theme.colors.onBackground}
                disabled={isSubmitting}
                loading={isSubmitting}
                onPress={handleSubmit}
              >
                {props.addMode ? "Add Expense" : "Update Expense"}
              </Button>
            </View>
          </View>
        )}
      </Formik>
      <Expenses addMode={props.addMode} updateData={handleUpdateData} />
    </KeyboardAvoidingView>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    marginTop: 6,
  },
});
