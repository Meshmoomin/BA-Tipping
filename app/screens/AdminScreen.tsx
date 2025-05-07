import { View, Pressable, Text, StyleSheet } from "react-native";
import { useScenarioStore } from "@/app/store/store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { useCustomBackHandler } from "@/app/hooks/backHandler";

//console.log("Store available?", !!useScenarioStore); // Debugging, remove in production

type AdminScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AdminScreen() {
  const navigation = useNavigation<AdminScreenNavigationProp>();
  const {
    currentScenario,
    completedScenarios,
    nextParticipantID,
    resetLogMessage,
    nextScenario,
    setScenario,
    incrementParticipantID,
    setLogMessage,
  } = useScenarioStore();
  useCustomBackHandler(() => true); // Returning `true` disables the back button

  // Scenario data - expand this for 20+ scenarios later
  const scenarios = [
    { id: 1, name: "Rounding Interface" },
    { id: 2, name: "Fixed Interface" },
    { id: 3, name: "Percent Interface" },
    { id: 4, name: "Old School Interface" },
  ];

  // Handle manual scenario selection
  const handleScenarioSelect = (scenarioId: number) => {
    resetLogMessage(); // Reset log message for the new scenario
    setScenario(scenarioId);
    incrementParticipantID(nextParticipantID + 1); // Increment participant ID in Zustand
    setLogMessage(
      "ID, " +
        nextParticipantID +
        ", Interface, " +
        scenarios[scenarioId - 1].name +
        ", "
    ); // Add Scenario to Log
    //console.log(`Scenario selected: ${scenarios[scenarioId - 1].name}`); // Debugging remove in production
    navigation.navigate("totalEntry"); // No need to pass ID - Zustand manages it
  };

  const handleNextTrial = () => {
    nextScenario(); // Updates currentScenario in Zustand
    navigation.navigate("totalEntry");
  };

  return (
    <View style={styles.container}>
      {/* Clear log when the screen is displayed */}
      <Text style={styles.title}>Scenario Controls</Text>
      <Text style={styles.subtitle}>Current: Scenario {currentScenario}</Text>
      <Text style={styles.completed}>
        Completed: {completedScenarios.length}/4
      </Text>
      {/* Manual Scenario Selection Buttons */}
      <View style={styles.buttonGroup}>
        {scenarios.map((scenario) => (
          <Pressable
            key={scenario.id}
            style={[
              styles.scenarioButton,
              currentScenario === scenario.id && styles.activeScenario,
            ]}
            onPress={() => handleScenarioSelect(scenario.id)}
          >
            <Text style={styles.buttonText}>{scenario.name}</Text>
          </Pressable>
        ))}
      </View>
      {/* Next Trial Button */}
      <Pressable style={styles.nextButton} onPress={handleNextTrial}>
        <Text style={styles.nextButtonText}>Next Trial →</Text>
      </Pressable>
      {/* Export Button (Placeholder) */}
      <Pressable
        style={styles.exportButton}
        onPress={() => console.log("Export data")}
      >
        <Text style={styles.exportButtonText}>Export Data</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 60,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  completed: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  buttonGroup: {
    marginBottom: 30,
  },
  scenarioButton: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  activeScenario: {
    backgroundColor: "#C1DFCD",
  },
  buttonText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#4F4F4F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  exportButton: {
    backgroundColor: "#AA5F5A",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  exportButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
