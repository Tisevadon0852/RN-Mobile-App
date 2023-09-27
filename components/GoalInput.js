import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //This addGoalHandler is not related to the one in our App.js file
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    textAlign: "center",
  },
});
