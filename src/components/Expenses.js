import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { fireAppDb } from "../../firebase";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    onSnapshot(collection(fireAppDb, "expenses"), (snapshot) => {
      setExpenses(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <View>
      <Text>Expenses</Text>
      {expenses.map((exp) => {
        return <Text style={{ color: "white" }}>{exp.expense_name}</Text>;
      })}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
