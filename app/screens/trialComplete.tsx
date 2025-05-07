import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "@/types/navigation";
import { commonStyles } from "../styles/commonStyles";

import { useScenarioStore } from "@/app/store/store";
import { useCustomBackHandler } from "@/app/hooks/backHandler";

export default function TrialComplete() {
  const navigation = useNavigation<ScreenNavigationProp>();
  useCustomBackHandler(() => true); // Returning `true` disables the back button

  const { logMessage, setLogMessage, resetLogMessage, appendToLog } =
    useScenarioStore();

  const storeFile = async () => {
    // Add to log
    await appendToLog(logMessage);
  };

  const handleComplete = () => {
    setLogMessage("TrialComplete, \n");
    storeFile(); // Save the log message to the CSV file
    console.log(logMessage);

    // Debugging only, should be removed in production, will be saved to csv file
    resetLogMessage(); // Reset the log message for the next trial
    navigation.navigate("Admin");
  };

  const handleCancel = () => {
    resetLogMessage();
    navigation.navigate("Admin");
  };

  const appendCSV = () => {
    // Append the log message to the CSV file

    // This function should be implemented to handle the actual file writing
    // For now, it's just a placeholder
    console.log("Appending to CSV:", logMessage);
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Pressable
          onPress={handleComplete}
          style={({ pressed }) => [
            styles.button,
            commonStyles.button,
            pressed && commonStyles.buttonPressed,
          ]}
        >
          <Text style={[styles.label, commonStyles.buttonText]}>
            Daten Speichern
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={handleCancel}
          style={({ pressed }) => [
            commonStyles.button,
            styles.cancelButton,
            pressed && commonStyles.buttonPressed,
          ]}
        >
          <Text style={[styles.label, commonStyles.buttonText]}>
            Szenario Abbrechen
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ECE6F0",
    padding: 90,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#E2938E",
    padding: 40,
    borderRadius: 5,
  },
  label: {
    fontSize: 22,
    color: "#4F4F4F",
    textAlign: "center",
    fontFamily: "Roboto",
    lineHeight: 28,
  },
});
