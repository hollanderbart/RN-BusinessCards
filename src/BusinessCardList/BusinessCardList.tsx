import React, { useMemo, useState } from 'react';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { StyleSheet } from 'react-native';
import Card from '../Card/Card';
import { BusinessCard, businessCards } from '../businessCards';
import { colors } from '../colors';

const renderItem = ({
  item,
  onDragStart,
  onStartDrag,
  onDragEnd,
  isActive,
}: DragListRenderItemInfo<BusinessCard>) => {
  return (
    <Card
      data={item}
      isScalingActive={isActive}
      onLongPress={onStartDrag}
      onPressOut={onDragEnd}
    />
  );
};

function BusinessCardList(): JSX.Element {
  const [sorting, setSorting] = useState<number[]>(
    businessCards.map((card) => card.id),
  );

  const sortedBusinessCards = useMemo(
    () =>
      businessCards.sort((a: BusinessCard, b: BusinessCard) => {
        const aIndex = sorting.indexOf(a.id);
        const bIndex = sorting.indexOf(b.id);
        return aIndex - bIndex;
      }),
    [sorting],
  );

  const onReordered = (fromIndex: number, toIndex: number) => {
    setSorting((prev) => {
      const newSorting = [...prev];
      const [removed] = newSorting.splice(fromIndex, 1);
      newSorting.splice(toIndex, 0, removed);
      return newSorting;
    });
  };

  return (
    <DragList
      contentContainerStyle={styles.dragListContainer}
      data={sortedBusinessCards}
      keyExtractor={(item: BusinessCard) => `${item.id}`}
      renderItem={renderItem}
      onReordered={onReordered}
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
