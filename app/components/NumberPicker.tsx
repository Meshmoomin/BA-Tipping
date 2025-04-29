import React, { useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Pressable } from 'react-native';

import ArrowUp from '@/assets/Icons/ArrowUp';
import ArrowDown from '@/assets/Icons/ArrowDown';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = 80; // Height of each number item

const NumberPicker = ({ 
  values, 
  selectedValue, 
  onSelect 
}: {
  values: number[];
  selectedValue: number;
  onSelect: (value: number) => void;
}) => {
  const scrollRef = useRef<ScrollView>(null);

  const handleScrollEnd = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    onSelect(values[index]);
  };

  // Snap to selected value on mount
  React.useEffect(() => {
    const initialIndex = values.indexOf(selectedValue);
    if (scrollRef.current && initialIndex >= 0) {
      scrollRef.current.scrollTo({
        y: initialIndex * ITEM_HEIGHT,
        animated: false,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mask} />

        <Pressable 
            onPress={() => scrollRef.current?.scrollTo({ y: (values.indexOf(selectedValue)-1) * ITEM_HEIGHT })}
            style={styles.arrowButton}>
            <ArrowUp width={24} height={24}/>
        </Pressable>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        contentContainerStyle={styles.scrollContent}
      >
        {values.map((value) => (
          <View key={value} style={styles.item}>
            <Text style={[
              styles.number,
              value === selectedValue && styles.selectedNumber
            ]}>
              {value.toFixed(2)}€
            </Text>
          </View>
        ))}
      </ScrollView>

        <Pressable
            onPress={() => scrollRef.current?.scrollTo({ y: (values.indexOf(selectedValue)+1) * ITEM_HEIGHT })}
            style={styles.arrowButton}>
            <ArrowDown width={24} height={24} />
        </Pressable>

      <View style={styles.mask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * 3, // Show 3 items at a time
    overflow: 'hidden',
  },
  scrollContent: {
    paddingVertical: ITEM_HEIGHT, // Extra space for first/last items
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 24,
    color: '#afafaf',
  },
  selectedNumber: {
    fontSize: 32,
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
  mask: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: 'rgba(255,255,255,0.8)',
    zIndex: 1,
  },
  arrowButton: {
    position: 'absolute',
    top: "40%",
    right: "60%",
    height: ITEM_HEIGHT
  },
});

export default NumberPicker;