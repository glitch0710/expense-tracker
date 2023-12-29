import { StyleSheet, View } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import React from "react";

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
              <Text variant="titleLarge" style={{ color: "white", textAlign: "right" }}>
                {props.expense.expense_amount}
              </Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({});
