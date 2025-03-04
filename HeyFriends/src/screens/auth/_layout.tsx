import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { AuthStackParamList } from '../../types/navigation'
import ScreenName from '../../constant/ScreenName'

const AuthLayout = () => {

    const Stack = createNativeStackNavigator<AuthStackParamList>()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.SignIn}>
                <Stack.Screen
                    name={ScreenName.SignIn}
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ScreenName.SignUp}
                    component={SignUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})