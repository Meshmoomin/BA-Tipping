import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Check from "@/assets/Icons/Check";

const PaymentConfirmedOverlay = () => {
  return (
    <SafeAreaView style={styles.paymentConfirmedOverlay}>
      <View style={styles.paymentConfirmedOverlayChild} />
      <Check style={styles.checkIcon} width={165} height={165} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paymentConfirmedOverlayChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#1f1f1f",
    borderWidth: 7,
    position: "absolute",
    width: "100%",
  },
  checkIcon: {
    top: 47,
    left: 81,
    position: "absolute",
  },
  paymentConfirmedOverlay: {
    flex: 1,
    height: 266,
    width: "100%",
  },
});

export default PaymentConfirmedOverlay;
