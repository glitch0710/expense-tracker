import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { fireAppDb } from "../../firebase";

const Expenses = () => {
  //   const unsub = onSnapshot(doc(fireAppDb, "expenses", "8YxIdi1pxpDWOcvsHi7v"), (doc) => {
  //     console.log("Current Data: ", doc.data());
  //   });
  const [expenses, setExpenses] = useState({});
  const unsub = onSnapshot(collection(fireAppDb, "expenses"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.log(change.doc.data());
    });
  });
  return (
    <View>
      <Text>Expenses</Text>
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
