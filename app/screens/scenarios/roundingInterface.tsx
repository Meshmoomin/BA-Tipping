import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useScenarioStore } from "@/app/store/store";
import { ScreenNavigationProp } from "@/types/navigation";
import { commonStyles } from "@/app/styles/commonStyles";
import RoundingCarousel from "@/app/components/flatListCarousel";

import OkChevron from "@/assets/Icons/OkChevron";

export default function Scenario1() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const { currentTotal, markCompleted, setTippedTotal, setTipSelectionLog } =
    useScenarioStore();

  const [currentTippedTotal, setCurrentTippedTotal] =
    React.useState(currentTotal); // Read currentTotal from totalEntry
  const values = [5.0, 4.5, 4.0, 3.5, 3.2]; // replace with algorithm

  const handleComplete = () => {
    setTippedTotal(currentTippedTotal); // Update Zustand store with the new total
    setTipSelectionLog(
      "TippedTotal, " +
        currentTippedTotal +
        ", TipPercentage, " +
        ((currentTippedTotal - currentTotal) / currentTotal).toFixed(2) +
        ", "
    ); // save data for csv
    //console.log("TippedTotal: " + currentTippedTotal + ", "); // log for debugging
    markCompleted(); // Update Zustand store
    navigation.navigate("Payment"); // Direct transition
  };

  return (
    <View style={commonStyles.fullScreen}>
      <Text
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          fontSize: 16,
          color: "#4f4f4f",
          fontFamily: "Roboto-Regular",
        }}
        onPress={() => navigation.goBack()}
      >
        {" "}
        Zurück
      </Text>

      <View style={styles.centerFlexColumn}>
        <View style={styles.totalBox}>
          <Text style={[styles.totalText, commonStyles.lightGrey]}>
            Betrag:
          </Text>
          <View style={[styles.currentTotalNumber, styles.totalNumberFlexBox]}>
            <Text style={styles.totalText}>{currentTotal.toFixed(2)}€</Text>
          </View>
        </View>

        <View style={styles.carouselBox}>
          <RoundingCarousel
            values={values}
            currentTotal={currentTotal}
            onChange={setCurrentTippedTotal}
          />
        </View>

        <View style={styles.okButtonBox}>
          <Pressable
            onPress={handleComplete}
            style={({ pressed }) => [
              styles.okButton,
              styles.roudUpShadowBox,
              pressed && commonStyles.buttonPressed,
            ]}
          >
            <View style={[styles.okButtonLabel]}>
              <Text style={styles.labelText}>OK</Text>
              <OkChevron style={styles.chevronIcon} width={40} height={40} />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    includeFontPadding: false,
  },
  centerFlexColumn: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    marginTop: 100,
    padding: 10,
    /* borderColor: "green", // Debugging style, remove in production.
    borderWidth: 5, // Debugging style, remove in production. */
  },
  carouselBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  totalNumberFlexBox: {
    flex: 0,
    justifyContent: "center",
  },
  roudUpShadowBox: {
    minWidth: 80,
    backgroundColor: "#ece6f0",
    borderRadius: 16,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  currentTotalFlexBox: {
    flexDirection: "row",
  },
  totalText: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 500,
    fontFamily: "Roboto",
    color: "#afafaf",
    textAlign: "center",
  },
  currentTotalNumber: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalBox: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 45,
    color: "#65558f",
    fontFamily: "Roboto-Regular",
    lineHeight: 52,
    textAlign: "center",
  },
  okButtonBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  chevronIcon: {},
  okButtonLabel: {
    flex: 0, // Default for `View`, can be removed.
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  okButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#ece6f0",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  currentTotalText: {
    fontSize: 80,
    lineHeight: 90,
    fontWeight: "600",
    fontFamily: "Roboto-Bold",
    color: "#1f1f1f",
    textAlign: "center",
  },
});
