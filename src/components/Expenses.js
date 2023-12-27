import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  doc,
  getDocs,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";
import { fireAppDb } from "../../firebase";

const Expenses = () => {
  //   const unsub = onSnapshot(doc(fireAppDb, "expenses", "8YxIdi1pxpDWOcvsHi7v"), (doc) => {
  //     console.log("Current Data: ", doc.data());
  //   });
  const [expenses, setExpenses] = useState([]);
  const unsub = onSnapshot(collection(fireAppDb, "expenses"), (snapshot) => {
    const rawExp = expenses;
    snapshot.docChanges().forEach((change) => {
      const expData = {
        id: change.doc.id,
        expense: change.doc.data().expense_name,
        amount: change.doc.data().expense_amount,
        date: change.doc.data().expense_date,
      };
      rawExp.push(expData);
    });
    setExpenses(rawExp);
  });
  // const fetchExpenses = async () => {
  //   const querySnapshot = await getDocs(collection(fireAppDb, "expenses"));
  //   const data = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     data: doc.data(),
  //   }));

  //   setExpenses(data);
  // };

  // useEffect(() => {
  //   fetchExpenses();
  // }, []);

  // useEffect(() => {
  //   console.log("rerendered")df
  // }, [expenses]);

  return (
    <View>
      <Text>Expenses</Text>
      {/* <FlatList
        data={expenses}
        renderItem={({ item }) => <Text style={{color: "white"}}>{item.expense}</Text>}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({});
