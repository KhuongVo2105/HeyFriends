import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper'

type Props = {
    'content': string,
}

const CustomDivider = (props: Props) => {
    return (
        <View className="w-80 flex flex-row items-center my-4">
            {/* Đoạn kẻ trái */}
            <View className="flex-1 h-[1px] bg-gray-300" />

            {/* Chữ ở giữa với nền trắng đè lên divider */}
            <Text className="px-2 text-gray-700 bg-white">{props.content}</Text>

            {/* Đoạn kẻ phải */}
            <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

    )
}

export default CustomDivider

const styles = StyleSheet.create({})