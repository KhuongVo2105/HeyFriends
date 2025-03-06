import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Divider, MD3Theme, Menu } from 'react-native-paper'

type Language = {
    label: string,
    value: string,
    flag: any
}

type Props = {
    language: string,
    changeLanguage: (lang: string) => void,
    theme: MD3Theme
}

const languages: Language[] = [
    { label: 'VI', value: 'vi', flag: require('../assets/flags/vietnam.png') },
    { label: 'EN', value: 'en', flag: require('../assets/flags/usa.png') },
    { label: 'JA', value: 'ja', flag: require('../assets/flags/japan.png') }
]

const SelectLanguage = ({ language, changeLanguage, theme }: Props) => {
    const [visible, setVisible] = useState(false)
    const openMenu = () => setVisible(true)
    const closeMenu = () => setVisible(false)

    const currentLang = languages.find(lang => lang.value === language) || languages[0]

    return (
        <View
            className='border rounded-xl'
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                borderColor: theme.colors.onPrimary
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchorPosition='bottom'
                anchor={
                    <Pressable
                        onPress={openMenu}
                        style={{ width: 80, height: 40, borderColor: theme.colors.onPrimary }}
                        className='flex flex-row justify-between items-center px-3'>
                        <Image source={currentLang.flag}
                            className='w-1/2'
                            style={{ resizeMode: 'contain' }} />
                        <Text className='text-xl text-right font-semibold w-1/2' style={{ color: theme.colors.onPrimary }}>
                            {currentLang.label}
                        </Text>
                    </Pressable>
                }>
                {languages.map(lang => (
                    <Menu.Item
                        key={lang.value}
                        onPress={() => {
                            changeLanguage(lang.value)
                            closeMenu()
                        }}
                        style={{ width: 80, alignItems:'flex-end' }} // Đặt kích thước tối thiểu cho menu item
                        titleStyle={{ color: theme.colors.onSurface, fontSize: 16 }}
                        title={
                            <View className="flex flex-row items-center justify-between p-2">
                                <Image
                                    source={lang.flag}
                                    className="w-6 h-6 mr-2"
                                    style={{ resizeMode: 'contain' }}
                                />
                                <Text className="text-base font-medium" style={{ color: theme.colors.onSurface }}>
                                    {lang.label}
                                </Text>
                            </View>
                        }
                    />
                ))}
            </Menu>
        </View>
    )
}

export default SelectLanguage
