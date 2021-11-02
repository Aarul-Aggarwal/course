import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCurrentGoals] = useState([]);
  const [isAdMode, setIsAdMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCurrentGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAdMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCurrentGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionalHandler = () => {
    setIsAdMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAdMode(true)} />
      <GoalInput
        onCancel={cancelGoalAdditionalHandler}
        visible={isAdMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
