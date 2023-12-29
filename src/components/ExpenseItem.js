import { Alert, StyleSheet, View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { fireAppDb } from "../../firebase";

const handleDelete = async (id) => {
  await deleteDoc(doc(fireAppDb, "expenses", id))
    .then(() => {
      alert("Item successfully deleted.");
    })
    .catch((error) => alert(error.code, ":", error.message));
};

const ExpenseItem = (props) => {
  return (
    <View>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text variant="titleLarge" style={{ color: "white" }}>
                {props.expense.expense_name}
              </Text>
              <Text variant="bodyMedium">{props.expense.expense_date}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                variant="titleLarge"
                style={{ color: "white", textAlign: "right" }}
              >
                {props.expense.expense_amount}
              </Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.debug("Pressed Edit")}>Edit</Button>
          <Button onPress={() => handleDelete(props.expense.id)}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
