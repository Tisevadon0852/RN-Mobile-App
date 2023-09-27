import { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    setCourseGoals();
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 4,
  },
});

// import {
//   Button,
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     setCourseGoals((currentCourseGoals) => [
//       ...currentCourseGoals,
//       { text: enteredGoalText, id: Math.random().toString() },
//     ]);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your goal"
//           onChangeText={goalInputHandler}
//         />
//         <Button title="ADD Goal" onPress={addGoalHandler} />
//       </View>
//       <View>
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => (
//             <Text style={styles.goalitem}>{itemData.item.text}</Text>
//           )}
//           keyExtractor={(item, index) => item.id}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingVertical: 50,
//     paddingHorizontal: 10,
//   },

//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingBottom: 50,
//     borderBottomWidth: 2,
//     borderBottomColor: "#ccc",
//   },

//   inputBox: {
//     borderWidth: 0.5,
//     width: "75%",
//     borderColor: "#ccc",
//     paddingHorizontal: 8,
//   },

//   goalitem: {
//     backgroundColor: "#043b5c",
//     color: "#fff",
//     textAlign: "center",
//     width: "90%",
//     marginTop: 4,
//     marginBottom: 4,
//     marginLeft: "auto",
//     marginRight: "auto",
//     padding: 5,
//     borderRadius: 8,
//   },
// });
