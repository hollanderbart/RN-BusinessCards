import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BusinessCard } from '../businessCards';
import { colors } from '../colors';

const Card = ({
  data: { name, title, company, email, favorite_emoji },
}: {
  data: BusinessCard;
}) => {
  return (
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
    fontSize: 24,
  },
});

export default Card;
