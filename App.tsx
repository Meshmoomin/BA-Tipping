import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

import AdminScreen from '@/app/screens/AdminScreen';
import ScenarioRouter from '@/app/components/ScenarioRouter';
import FollowUpGeneral from '@/app/screens/followUp/followUpGeneral';
import FollowUpComplexity from '@/app/screens/followUp/followUpComplexity';
import FollowUpIntrusiveness from '@/app/screens/followUp/followUpIntrusiveness';



const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="FollowUpGeneral" component={FollowUpGeneral} />
        <Stack.Screen name="FollowUpComplexity" component={FollowUpComplexity} />
        <Stack.Screen name="FollowUpIntrusiveness" component={FollowUpIntrusiveness} />
        {/* Add more FollowUp screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}