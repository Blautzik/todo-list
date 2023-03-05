import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import LandingSlider from '../components/LandingSlider';
import OnboardingSlider from '../components/OnboardingSlider';

const Login = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <View className='items-center justify-center h-screen'>
            {/*/<LandingSlider  navigation={navigation}/>*/}
            <OnboardingSlider navigation={navigation}/>
        </View>
    )
}

export default Login