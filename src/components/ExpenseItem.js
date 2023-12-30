import { StyleSheet, View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { fireAppDb } from "../../firebase";

const ExpenseItem = (props) => {
  const handleDelete = async (id) => {
    await deleteDoc(doc(fireAppDb, "expenses", id))
      .then(() => {
        alert("Item successfully deleted.");
      })
      .catch((error) => alert(error.code, ":", error.message));
  };

  const handleEdit = (mode, id, name, amount, date) => {
    const updateData = {
      mode: mode,
      id: id,
      name: name,
      amount: amount,
      date: date,
    };

    props.updateData(updateData);
  };

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
          <Button
            onPress={() =>
              handleEdit(
                false,
                props.expense.id,
                props.expense.expense_name,
                props.expense.expense_amount,
                props.expense.expense_date
              )
            }
          >
            Edit
          </Button>
          <Button onPress={() => handleDelete(props.expense.id)}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
