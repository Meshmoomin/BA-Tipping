import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useScenarioStore } from '@/store/store';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

console.log('Store available?', !!useScenarioStore);

type RootStackParamList = {
  Admin: undefined;
  Scenario: { scenarioId?: number };
  FollowUp: { scenarioId: number };
};

type AdminScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Admin'>;

export default function AdminScreen() {
  const navigation = useNavigation<AdminScreenNavigationProp>();
  const {
    currentScenario,
    nextScenario,
    setScenario,
    completedScenarios
  } = useScenarioStore();

  // Handle manual scenario selection
  const handleScenarioSelect = (scenarioId: number) => {
    setScenario(scenarioId);
    navigation.navigate('Scenario', {}); // No need to pass ID - Zustand manages it
  };
  
  const handleNextTrial = () => {
    nextScenario(); // Updates currentScenario in Zustand
    navigation.navigate('Scenario', {});
  };

  // Scenario data - expand this for 20+ scenarios later
  const scenarios = [
    { id: 1, name: 'Rounding Interface' },
    { id: 2, name: 'Scenario 2' },
    { id: 3, name: 'Scenario 3' },
    { id: 4, name: 'Scenario 4' },
  ];

  return (
    <View style={styles.container}>
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
              currentScenario === scenario.id && styles.activeScenario
            ]}
            onPress={() => handleScenarioSelect(scenario.id)}
          >
            <Text style={styles.buttonText}>{scenario.name}</Text>
          </Pressable>
        ))}
      </View>

      {/* Next Trial Button */}
      <Pressable
        style={styles.nextButton}
        onPress={handleNextTrial}
      >
        <Text style={styles.nextButtonText}>Next Trial →</Text>
      </Pressable>

      {/* Export Button (Placeholder) */}
      <Pressable
        style={styles.exportButton}
        onPress={() => console.log('Export data')}
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  completed: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  buttonGroup: {
    marginBottom: 30,
  },
  scenarioButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeScenario: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  exportButton: {
    backgroundColor: '#ff5722',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  exportButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});