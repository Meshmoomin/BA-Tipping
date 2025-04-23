import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Admin: undefined;
    Scenario: undefined;
    FollowUpGeneral: undefined;
    FollowUpIntrusiveness: undefined;
    FollowUpComplexity: undefined;
    Payment: undefined;
};

// Type for useNavigation hook
export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;