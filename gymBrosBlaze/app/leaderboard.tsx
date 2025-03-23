import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

interface User {
    id: string;
    name: string;
    score: number;
  }

const Leaderboard = () => {
  const users: User[] = [
    { id: '1', name: 'John Doe', score: 100 },
    { id: '2', name: 'Jane Smith', score: 95 },
    { id: '3', name: 'Alice Johnson', score: 90 },
    { id: '4', name: 'Bob Brown', score: 85 },
    // Add more users as needed
  ];

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.rank}>{`#${item.id}`}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0762f5',  // Light Blue Color
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0762f5',  // Light Blue Color
  },
  name: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: '#0762f5',  // Light Blue Color
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0762f5',  // Light Blue Color
  },
});


export default Leaderboard;