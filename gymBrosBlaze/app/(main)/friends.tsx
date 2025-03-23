import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

interface Friend {
  id: string;
  username: string;
}

export default function FriendsPage() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [newFriend, setNewFriend] = useState('');

  const addFriend = () => {
    if (!newFriend.trim()) return; // Prevent adding empty names
    const newFriendObj = { id: Date.now().toString(), username: newFriend }; // Create unique ID
    setFriends([...friends, newFriendObj]); // Add to list
    setNewFriend(''); // Clear input
  };

  const deleteFriend = (id: string) => {
    setFriends(friends.filter(friend => friend.id !== id)); // Remove friend from list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE GYM BROS</Text>
      <TextInput
        placeholder="Enter friend's username"
        value={newFriend}
        onChangeText={setNewFriend}
        style={styles.input}
        placeholderTextColor="#AAAAAA"
      />
      <Button title="Add Gym Bro" onPress={addFriend} />

      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.username}</Text>
            <TouchableOpacity onPress={() => deleteFriend(item.id)}>
              <Text style={styles.deleteButton}>UNBRO</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#292929' },
  title: { fontSize: 24, marginBottom: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' },
  input: { 
    borderWidth: 1, borderColor: 'white', padding: 10, marginBottom: 10, color: 'white', 
    borderRadius: 5, backgroundColor: '#1E1E1E'
  },
  friendItem: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    padding: 10, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#444'
  },
  friendName: { color: 'white', fontSize: 18 },
  deleteButton: { color: 'red', fontSize: 16, fontWeight: 'bold' },
});
