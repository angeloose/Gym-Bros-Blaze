import React from 'react';
import { View, StyleSheet } from 'react-native';

const BlankScreen = () => {
  return (
    <View style={styles.container}>
      {/* The screen is blank, but you can add elements here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // or any other color
  },
});

export default BlankScreen;