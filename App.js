import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = goalTitle => {
    // setCourseGoals([...courseGoals, enteredGoal]); not optimized
    setCourseGoals(courseGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddModal(false);
  }

  const onDeleteHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId);
    });
  };

  const showModalHandler = () => {
    setIsAddModal(true);
  }

  const disShowModalHandler = () => {
    setIsAddModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={showModalHandler}/>
      <GoalInput visible={isAddModal} onAddHandler={addGoalHandler} onClose={disShowModalHandler}/>
      <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => <GoalItem id={itemData.item.id}  title={itemData.item.value} onDelete={onDeleteHandler}/>
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
