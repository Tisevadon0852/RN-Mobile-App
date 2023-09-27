import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#bd9b19",
    margin: 4,
    borderRadius: 5,
    textAlign: "center",
    width: "98%",
    marginTop: 3,
    marginBottom: 3,
    marginRight: "auto",
    marginLeft: "auto",
    padding: 6,
    color: "#fff",
  },
});
