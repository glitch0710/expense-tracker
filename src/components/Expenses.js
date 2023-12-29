import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { fireAppDb } from "../../firebase";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState([]);

  const handleUpdateData = (updateData) => {
    props.updateData(updateData);
  };

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
    <View style={{ marginTop: 10 }}>
      {expenses.map((exp) => {
        return (
          <View>
            <ExpenseItem
              key={exp.id}
              expense={exp}
              updateData={handleUpdateData}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
