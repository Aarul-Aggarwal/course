import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItems}>
        <Text style={{ color: "white" }}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    padding: 20,
    marginTop: 15,
    marginVertical: 10,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
});
