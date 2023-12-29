import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { fireAppDb } from "../../firebase";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    onSnapshot(collection(fireAppDb, "expenses"), (snapshot) => {
      setExpenses(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <View>
      <Text>Expenses</Text>
      {expenses.map((exp) => {
        return (
          <View>
            <ExpenseItem key={exp.id} expense={exp} />
          </View>
        );
      })}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
