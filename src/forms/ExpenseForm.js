import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { Text, TextInput, useTheme } from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ExpenseForm = () => {
  const [date, setDate] = useState(new Date());

  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <View>
        <Text>ExpenseForm</Text>
        <View style={styles.inlineComponents}>
          <TextInput
            outlineColor={theme.colors.secondary}
            style={styles.textInput}
            label="Enter expense name"
            mode="outlined"
          />
          <TextInput
            outlineColor={theme.colors.secondary}
            style={styles.textInput}
            label="Enter Amount"
            mode="outlined"
          />
        </View>
        <DatePickerInput
          outlineColor={theme.colors.secondary}
          locale="en"
          label="Pick a date"
          value={date}
          onChange={(d) => setDate(d)}
          inputMode="start"
          style={styles.dateTextInput}
          mode="outlined"
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  textInput: {
    width: 180,
    marginHorizontal: 5,
  },
  dateTextInput: {
    width: 300,
    marginTop: -480,
    marginHorizontal: 5,
  },
  inlineComponents: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
