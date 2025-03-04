import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

const SignUp = () => {

    const theme = useTheme()

  return (
    <View className='w-full h-full' style={{backgroundColor: theme.colors.background}}>
      <Text>SignUp</Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})