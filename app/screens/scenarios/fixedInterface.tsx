import * as React from "react";
import {Text, StyleSheet, View, Image} from "react-native";

import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '@/types/navigation';
import { useScenarioStore } from '@/app/store/store';

export default function FixedInterface () {
    const navigation = useNavigation<ScreenNavigationProp>();
            const { currentScenario } = useScenarioStore();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{position: 'absolute', top: 50, left: 20, fontSize: 16, color: '#4f4f4f', fontFamily: 'Roboto-Regular'}} onPress={() => navigation.goBack()}> Zurück</Text>
            <Text>Fixed Interface goes Here</Text>
        </View>
    );
};