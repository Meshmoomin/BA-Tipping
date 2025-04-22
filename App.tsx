import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from '@/screens/AdminScreen';
import ScenarioRouter from '@/components/ScenarioRouter';
import FollowUpGeneral from '@/screens/followUpGeneral';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen 
          name="Scenario" 
          component={ScenarioRouter} 
          options={{ headerShown: false }}
        />
        {/* Add FollowUp screens separately */}
        <Stack.Screen name="FollowUp1" component={FollowUpGeneral} />
        {/* <Stack.Screen name="FollowUp2" component={FollowUp2} /> */}
        {/* ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}