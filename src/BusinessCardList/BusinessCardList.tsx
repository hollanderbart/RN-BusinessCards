import React from 'react';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { StyleSheet } from 'react-native';
import Card from '../Card/Card';
import { BusinessCard, businessCards } from '../businessCards';
import { colors } from '../colors';

const renderItem = ({
  item,
  onDragStart,
  onDragEnd,
}: DragListRenderItemInfo<BusinessCard>) => (
  <Card data={item} onLongPress={onDragStart} onPressOut={onDragEnd} />
);

function BusinessCardList(): JSX.Element {
  return (
    <DragList
      contentContainerStyle={styles.dragListContainer}
      data={businessCards}
      keyExtractor={(item: BusinessCard) => item.name}
      renderItem={renderItem}
      style={styles.dragListStyle}
    />
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  dragListContainer: {
    flexGrow: 1,
    paddingVertical: 60,
    paddingHorizontal: 16,
  },
  dragListStyle: {
    flexGrow: 1,
    backgroundColor: colors.radiantPurple,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default BusinessCardList;
