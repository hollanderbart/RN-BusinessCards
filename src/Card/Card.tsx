import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BusinessCard } from '../businessCards';
import { colors } from '../colors';

const Card = ({
  data: { name, title, company, email, favorite_emoji },
  onLongPress,
  onPressOut,
}: {
  data: BusinessCard;
  onLongPress: () => void;
  onPressOut: () => void;
}) => {
  return (
    <Pressable onLongPress={onLongPress} onPressOut={onPressOut}>
      <View style={styles.cardContainer}>
        <View style={styles.cardInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text>{title}</Text>
          <Text>{company}</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{favorite_emoji}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    borderBottomColor: '#ccc',
    backgroundColor: colors.white,
  },
  cardInfo: {
    flex: 1,
  },
  emojiContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 32,
  },
});

export default Card;
