import React from 'react';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { BusinessCard, businessCards } from './businessCards';
import Card from './Card/Card';
import { colors } from './colors';

const renderItem = ({ item }: DragListRenderItemInfo<BusinessCard>) => (
  <Card data={item} />
);

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: colors.radiantPurple,
        paddingTop: 60,
      }}
    >
      <DragList
        contentContainerStyle={styles.dragListContainer}
        data={businessCards}
        keyExtractor={(item) => item.name}
        // onReordered={onReordered}
        renderItem={renderItem}
        style={{ flexGrow: 1, backgroundColor: colors.radiantPurple }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  dragListContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
