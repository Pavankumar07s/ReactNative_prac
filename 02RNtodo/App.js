import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");

  function goalInputHandle(text) {
    setGoal(text);
  }

  function addGoalHandle() {
    setGoals((prevGoals) => {
      return [...prevGoals, goal];
    });
    setGoal("");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Goals here.."
          onChangeText={goalInputHandle}
          value={goal}
        />
        <TouchableOpacity style={styles.ButtonStyle} onPress={addGoalHandle}>
          <Text style={{ color: "#fff" }}>Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.GoalsContainer}>
        {goals.map((goal, index) => (
          <View style={styles.GoalItem} key={index}>
            <Text style={{ color: "#fff" }}>{goal}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    width: "60%",
    padding: 8,
  },
  ButtonStyle: {
    backgroundColor: "#000000",
    padding: 10,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  GoalsContainer: {
    flex: 11,
    padding: 16,
  },
  GoalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  GoalText:{

  },
});
