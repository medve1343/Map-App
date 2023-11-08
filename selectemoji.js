import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';

const Emoji = () => {
  
  const [selectedEmoji, setSelectedEmoji] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <EmojiSelector
        onEmojiSelected={(emoji) => setSelectedEmoji(emoji.name)}
        columns={6}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Emoji;
