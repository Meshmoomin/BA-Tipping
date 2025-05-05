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
  Pressable,
} from "react-native";
import { commonStyles } from "@/app/styles/commonStyles";

import ArrowUp from "@/assets/Icons/ArrowUp";
import ArrowDown from "@/assets/Icons/ArrowDown";
import FadeUpper from "@/assets/Icons/FadeUpper";
import FadeLower from "@/assets/Icons/FadeLower";

const { width, height } = Dimensions.get("window");
const ITEM_HEIGHT = 120;
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
  currentTotal: number;
  onChange: (value: number) => void;
}

const RoundingCarousel: React.FC<RoundingCarouselProps> = ({
  values,
  selectedValue,
  currentTotal,
  onChange,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<number>>(null);

  // Add currentTotal to the bottom of the list
  const extendedValues = [...values, currentTotal];

  // Initialize the selected value to the last value in the list
  const [centerIndex, setCenterIndex] = React.useState(
    extendedValues.length - 1
  );

  // Ensure the selectedValue is initialized to the last value
  React.useEffect(() => {
    onChange(extendedValues[extendedValues.length - 1]);
  }, [extendedValues, onChange]);

  const getItemLayout = (
    data: ArrayLike<number> | null | undefined,
    index: number
  ) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < extendedValues.length) {
      flatListRef.current?.scrollToOffset({
        offset: index * ITEM_HEIGHT,
        animated: true,
      });
      onChange(extendedValues[index]); // Update the selected value
      setCenterIndex(index); // Update the center index
    }
  };

  const handleScrollUp = () => {
    scrollToIndex(centerIndex - 1);
  };

  const handleScrollDown = () => {
    scrollToIndex(centerIndex + 1);
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setCenterIndex(index); // Update the center index dynamically
  };

  const handleMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    onChange(extendedValues[index]); // Update the selected value
  };

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

    const isCenterItem = index === centerIndex;

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

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FadeUpper
          style={[
            {
              top: 0,
            },
            styles.fade,
          ]}
        />
        <AnimatedFlatList
          ref={flatListRef}
          data={extendedValues}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingVertical: CENTER_OFFSET,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: true,
              listener: handleScroll, // Dynamically update the center index
            }
          )}
          onMomentumScrollEnd={handleMomentumEnd}
          initialScrollIndex={extendedValues.length - 1} // Start at the last value
        />
      </View>
      <FadeLower
        style={[
          {
            bottom: 0,
          },
          styles.fade,
        ]}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            commonStyles.button,
            pressed && commonStyles.buttonPressed,
          ]}
          onPress={handleScrollUp}
        >
          <ArrowUp style={styles.icon} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            commonStyles.button,
            pressed && commonStyles.buttonPressed,
          ]}
          onPress={handleScrollDown}
        >
          <ArrowDown style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

// Updated styles
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    justifyContent: "center",
    overflow: "hidden",
    /* borderWidth: 1, // Debugging style, remove in production.
    borderColor: "#ccc", // Debugging style, remove in production*/
  },
  fade: {
    pointerEvents: "none",
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    zIndex: 1,
  },
  icon: {
    margin: 5,
  },
  buttonContainer: {
    justifyContent: "space-between",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#ece6f0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#65558f",
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
