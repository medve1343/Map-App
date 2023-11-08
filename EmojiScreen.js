import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import EmojiSelector from 'react-native-emoji-selector';


const EmojiScreen = ({ navigation }) => {
  const handleEmojiSelection = (emoji) => {
    const emojiName = emoji;
    navigation.navigate('Map', {selectedEmoji: emojiName,
      navigation: navigation,});
  };

  return (
    <View style={styles.emojiContainer}>
      <EmojiSelector
          onEmojiSelected={handleEmojiSelection}
          columns={6}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  emojiContainer: {
    flex: 0.5,
  },
});

export default EmojiScreen;
