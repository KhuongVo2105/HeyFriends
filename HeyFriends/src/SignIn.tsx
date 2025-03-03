import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from 'react-native-paper'

const SignIn = () => {
    const theme = useTheme()
    return (
        <View className='w-full h-full' style={{backgroundColor:theme.colors.background}}>
            <Text className='text-3xl' style={{color:theme.colors.primary}}>
                Primary
            </Text>
            <Text className='text-3xl' style={{color:theme.colors.secondary}}>
                Secondary
            </Text>
            <Text className='text-3xl' style={{color:theme.colors.tertiary}}>
                Tertiary
            </Text>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})