import React from 'react';
import { View, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';

interface User {
    id: string;
    name: string;
    score: number;
  }

const Leaderboard = () => {
  const users: User[] = [
    { id: '1', name: 'John Doe', score: 100 },
    { id: '2', name: 'Jane Doe', score: 95 },
    { id: '3', name: 'Alice Doe', score: 90 },
    { id: '4', name: 'Bob Doe', score: 85 },
  ];

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.rank}>{`#${item.id}`}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../../assets/images/demo.jpg')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Leaderboard</Text>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Optional: Darkens the background for better text visibility
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0762f5',
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
    color: '#0762f5',
  },
  name: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: '#0762f5',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0762f5',
  },
});

export default Leaderboard;
