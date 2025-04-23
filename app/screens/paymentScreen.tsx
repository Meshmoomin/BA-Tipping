import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '@/types/navigation';
import { commonStyles } from '@/app/styles/commonStyles';


export default function PaymentScreen() {
    const navigation = useNavigation<ScreenNavigationProp>();

    const navigateToFollowUp = () => {
        navigation.navigate('FollowUpGeneral');
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={navigateToFollowUp} style={[styles.button,commonStyles.button ]}>
                <Text style={commonStyles.buttonText}>  
                    Bezahlen
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
        padding: 40,
    },
    label: {
        fontSize: 22,
        lineHeight: 28,
    },
});