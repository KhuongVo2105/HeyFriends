import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

type Props = {
    'content': string,
}

const CustomDivider = (props: Props) => {

    const theme = useTheme()

    return (
        <View className="w-80 flex flex-row items-center my-4">
            {/* Đoạn kẻ trái */}
            <View className="flex-1 h-[1px]" style={{ backgroundColor: theme.colors.onSurface }} />

            {/* Chữ ở giữa với nền trắng đè lên divider */}
            <Text className="px-2 text-lg"
                style={{ color: theme.colors.onSurface, backgroundColor: theme.colors.surface }}>{props.content}</Text>

            {/* Đoạn kẻ phải */}
            <View className="flex-1 h-[1px]" style={{ backgroundColor: theme.colors.onSurface }} />
        </View>

    )
}

export default CustomDivider

const styles = StyleSheet.create({})