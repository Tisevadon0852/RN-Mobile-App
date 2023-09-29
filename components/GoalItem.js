import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#392e4a" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#ccc",
    color: "black",
    textAlign: "center",
    width: "100%",
    marginTop: 4,
    marginBottom: 4,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 5,
    borderRadius: 8,
  },
});
