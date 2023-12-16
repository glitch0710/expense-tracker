import { StyleSheet, View } from "react-native";
import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { Text, TextInput, useTheme } from "react-native-paper";

const ExpenseForm = () => {
  const theme = useTheme();
  return (
    <View>
      <Text>ExpenseForm</Text>
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Enter expense name"
        mode="outlined"
      />
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Enter expense name"
        mode="outlined"
      />
      <TextInput
        outlineColor={theme.colors.secondary}
        style={styles.textInput}
        label="Enter expense name"
        mode="outlined"
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    width: 300,
  },
});
