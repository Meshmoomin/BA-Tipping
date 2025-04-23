import * as React from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";

import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '@/types/navigation';
import { useScenarioStore } from '@/app/store/store';

export default function FollowUpComplexity() {
    const navigation = useNavigation<ScreenNavigationProp>();
    const { currentScenario } = useScenarioStore();
  
    const handleOptionSelect = (value: number) => {
      // Save answer to store (optional)
      navigation.navigate('FollowUpIntrusiveness'); 
    };
  
    return (
      <View>
        <Text>Follow-up Question 1</Text>
        
        {/* Example rating scale */}
        {[1, 2, 3, 4, 5].map((num) => (
          <Pressable 
            key={num} 
            onPress={() => handleOptionSelect(num)}
          >
            <Text>{num}</Text>
          </Pressable>
        ))}
      </View>
    );
  }