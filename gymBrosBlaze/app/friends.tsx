import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useRouter } from 'expo-router';

interface Friend {
  _id: string;
  username: string;
}

export default function FriendsPage() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [newFriend, setNewFriend] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axios.get('http://172.19.192.1:3000/api/friends');
      setFriends(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  const addFriend = async () => {
    if (!newFriend) return;
    try {
      await axios.post('http://172.19.192.1:3000/api/friends', { username: newFriend });
      setNewFriend('');
      fetchFriends();
    } catch (error) {
      console.error('Error adding friend:', error);
    }
  };

  const deleteFriend = async (id: string) => {
    try {
      await axios.delete(`http://172.19.192.1:3000/api/friends/${id}`);
      fetchFriends();
    } catch (error) {
      console.error('Error deleting friend:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Friends</Text>
      <TextInput
        placeholder="Enter friend's username"
        value={newFriend}
        onChangeText={setNewFriend}
        style={styles.input}
      />
      <Button title="Add Friend" onPress={addFriend} />

      <FlatList
        data={friends}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.username}</Text>
            <TouchableOpacity onPress={() => deleteFriend(item._id)}>
              <Text style={styles.deleteButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#292929' },
  title: { fontSize: 24, marginBottom: 20, color: 'white' },
  input: { borderWidth: 1, borderColor: 'white', padding: 10, marginBottom: 10, color: 'white' },
  friendItem: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  friendName: { color: 'white' },
  deleteButton: { color: 'red' },
});
