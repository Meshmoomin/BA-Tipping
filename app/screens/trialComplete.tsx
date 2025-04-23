import React from 'react';
import { View, Button, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '@/types/navigation';

export default function TrialComplete() {
    const navigation = useNavigation<ScreenNavigationProp>();

    const navigateToFollowUp = () => {
        navigation.navigate('Admin');
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateToFollowUp} style={styles.button}>
                <Text style={styles.label}>  
                    Daten Speichern
                </Text> 
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#ECE6F0',
        padding: 40,
        borderRadius: 5,
    },
    label: {
        fontSize: 22,
        color: '#4F4F4F',
        textAlign: 'center',
        fontFamily: 'Roboto',
        lineHeight: 28
    },
});