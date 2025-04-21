import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSurveyStore } from "../store"; // Importing Zustand store for state management
import { useNavigation } from '@react-navigation/native';

export default function AdminScreen() {
  const { currentScenario, goToScenario, nextScenario } = useSurveyStore();
  const navigation = useNavigation();

  // Style for scenario buttons
  const getButtonStyle = (scenarioNum: number) => ({
    backgroundColor: currentScenario === scenarioNum ? '#6200EE' : '#DDD',
    padding: 15,
    margin: 5,
    borderRadius: 5,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Controls</Text>
      
      {/* Scenario Selection Buttons */}
      <View style={styles.buttonRow}>
        {[1, 2, 3, 4].map((num) => (
          <Pressable
            key={num}
            style={getButtonStyle(num)}
            onPress={() => goToScenario(num)}
          >
            <Text style={{ color: currentScenario === num ? 'white' : 'black' }}>
              Scenario {num}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Navigation Controls */}
      <Pressable 
        style={styles.nextButton}
        onPress={() => navigation.navigate("roundingInterface" as never)}
      >
        <Text style={{ color: 'white' }}>View Current Scenario</Text>
      </Pressable>

      <Pressable 
        style={styles.nextButton}
        onPress={nextScenario}
      >
        <Text style={{ color: 'white' }}>Next Trial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  buttonRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  nextButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
});