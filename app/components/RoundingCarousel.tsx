import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import type { ICarouselInstance } from "react-native-reanimated-carousel/src/types";

import ArrowUp from "@/assets/Icons/ArrowUp";
import ArrowDown from "@/assets/Icons/ArrowDown";

const { width: windowWidth } = Dimensions.get("window");
const ITEM_WIDTH = 100;
const VISIBLE_ITEMS = 5;

interface RoundingCarouselProps {
  values: number[];
  selectedValue: number;
  onChange: (value: number) => void;
}

interface CarouselItem {
  item: number;
  index: number;
}

const RoundingCarouselBroken: React.FC<RoundingCarouselProps> = ({
  values,
  selectedValue,
  onChange,
}) => {
  const carouselRef = React.useRef<ICarouselInstance>(null);
  const selectedIndex = values.indexOf(selectedValue);

  const handleUpPress = () => {
    const newIndex = Math.max(0, selectedIndex - 1);
    onChange(values[newIndex]);
    carouselRef.current?.prev();
  };

  const handleDownPress = () => {
    const newIndex = Math.min(values.length - 1, selectedIndex + 1);
    onChange(values[newIndex]);
    carouselRef.current?.next();
  };

  const renderItem = ({ item, index }: CarouselItem) => {
    const isSelected = index === selectedIndex;
    return (
      <View style={styles.item}>
        <Text
          style={[styles.valueText, isSelected && styles.selectedValueText]}
        >
          {item.toFixed(2)}€
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleUpPress} style={styles.arrowUp}>
        <ArrowUp width={49} height={50} />
      </Pressable>

      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          loop={false}
          width={ITEM_WIDTH}
          height={120}
          style={{ width: ITEM_WIDTH * VISIBLE_ITEMS }}
          data={values}
          defaultIndex={selectedIndex}
          onSnapToItem={(index: number) => onChange(values[index])}
          renderItem={renderItem}
        />
      </View>

      <Pressable onPress={handleDownPress} style={styles.arrowDown}>
        <ArrowDown width={49} height={50} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    height: 200,
  },
  carouselContainer: {
    marginHorizontal: 20,
  },
  item: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  valueText: {
    fontSize: 28,
    color: "#afafaf",
    fontFamily: "Roboto-Regular",
  },
  selectedValueText: {
    fontSize: 48,
    color: "#1f1f1f",
    fontFamily: "Roboto-Bold",
  },
  arrowUp: {
    padding: 10,
  },
  arrowDown: {
    padding: 10,
  },
});

export default RoundingCarouselBroken;
