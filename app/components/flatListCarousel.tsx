import React, { useRef } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width, height } = Dimensions.get("window");
const ITEM_HEIGHT = 120; // ;
const VISIBLE_ITEMS = 3;
const CENTER_OFFSET = ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2);

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList as React.ComponentClass<
    React.ComponentProps<typeof FlatList<number>>
  >
) as React.ComponentType<
  React.ComponentProps<typeof FlatList<number>> & {
    ref?: React.Ref<FlatList<number>>;
  }
>;

interface RoundingCarouselProps {
  values: number[];
  selectedValue: number;
  onChange: (value: number) => void;
}

const RoundingCarousel: React.FC<RoundingCarouselProps> = ({
  values,
  selectedValue,
  onChange,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<number>>(null);

  const getItemLayout = (
    data: ArrayLike<number> | null | undefined,
    index: number
  ) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const renderItem = ({ item, index }: { item: number; index: number }) => {
    const inputRange = [
      (index - 2) * ITEM_HEIGHT,
      (index - 1) * ITEM_HEIGHT,
      index * ITEM_HEIGHT,
      (index + 1) * ITEM_HEIGHT,
      (index + 2) * ITEM_HEIGHT,
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.7, 0.85, 1, 0.85, 0.7],
      extrapolate: "clamp",
    });

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0.7, 1, 0.5, 0.7],
      extrapolate: "clamp",
    });

    // Determine if the current item is the center item
    const isCenterItem = selectedValue === item;

    return (
      <Animated.View
        style={[
          styles.item,
          {
            height: ITEM_HEIGHT,
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Text
          style={[
            styles.valueText,
            { fontWeight: isCenterItem ? "bold" : "normal" },
          ]}
        >
          {item.toFixed(2)}€
        </Text>
      </Animated.View>
    );
  };

  const handleMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    onChange(values[index]);
  };

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        ref={flatListRef}
        data={values}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingVertical: CENTER_OFFSET,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={handleMomentumEnd}
        initialScrollIndex={values.indexOf(selectedValue)}
      />
    </View>
  );
};

// Keep your existing styles
const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  valueText: {
    fontSize: 70,
    lineHeight: 85,
    color: "#4f4f4f",
    fontFamily: "Roboto-Regular",
  },
});

export default RoundingCarousel;
