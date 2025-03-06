import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Button, Dialog, Divider, Menu, Paragraph, Portal, TextInput, useTheme } from 'react-native-paper'
import { AuthStackParamList } from '../../types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenName from '../../constant/ScreenName'
import PhoneInput, { ICountry, isValidPhoneNumber } from 'react-native-international-phone-number'
import CustomDivider from '../../components/CustomDivider'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTranslation } from 'react-i18next'
import i18n from './../../languages/i18n'
import { getLocales } from "react-native-localize";
import SelectLanguage from '../../components/SelectLanguage'

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>

const SignIn = ({ navigation }: Props) => {
    const theme = useTheme()

    const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const [visible, setVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [country, setCountry] = useState('vi') // Mặc định là tiếng Việt
    const { t } = useTranslation()
    useEffect(() => {
        const deviceLang = getLocales()[0].languageCode || 'vi'
        setCountry(deviceLang)        // Cập nhật ngôn ngữ mặc định từ thiết bị
        i18n.changeLanguage(deviceLang) // Cập nhật giao diện
    }, [])

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        setCountry(lang)
    }


    function handleInputValue(phoneNumber: string) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: ICountry) {
        setSelectedCountry(country);
    }

    // Xử lý sự kiện khi nhấn nút SignIn
    function handleSignIn() {
        if (selectedCountry && !isValidPhoneNumber(inputValue, selectedCountry)) {
            // Số điện thoại không đúng định dạng với quốc gia
            setErrorMessage(t('invalid_phone_format'))
            setVisible(true)
        } else {
            // Thực hiện xử lý đăng nhập (nếu hợp lệ)
            console.log('Số điện thoại hợp lệ, tiến hành đăng nhập...')
        }
    }

    function comingSoon(){
        Alert.alert(
            t('notify'),
            t('feature_coming_soon'),
            [
                {text: t('ok')}
            ]
        )
    }

    return (
        <KeyboardAwareScrollView>

            <View className='static min-h-screen flex items-center justify-between'
                style={{ backgroundColor: theme.colors.background }}
            >

                <View className='absolute top-5 right-5 z-10'                    >
                    <SelectLanguage language={country} changeLanguage={changeLanguage} theme={theme} />
                </View>

                <View className='w-full flex items-center pt-40 pb-10 rounded-b-full z-0'
                    style={{
                        backgroundColor: theme.colors.primary
                    }}>
                    <Avatar.Image size={150} source={require('../../assets/splash.png')} />
                </View>


                <View className='flex items-center'>
                    <View className='w-96 mb-10'>
                        <PhoneInput
                            value={inputValue}
                            onChangePhoneNumber={handleInputValue}
                            selectedCountry={selectedCountry}
                            onChangeSelectedCountry={handleSelectedCountry}
                            placeholder={t('enter_phone_number')}
                            defaultCountry='US'
                        />
                    </View>

                    <Button className='w-80' icon="" mode="contained" onPress={handleSignIn}>
                        {t('sign_in')}
                    </Button>

                    <CustomDivider content={t('or')} />

                    <View className='flex flex-row w-64 justify-between'>
                        <Pressable onPress={comingSoon}>
                            <Avatar.Icon size={50} icon="facebook" />
                        </Pressable>
                        <Pressable onPress={comingSoon}>
                            <Avatar.Icon size={50} icon="google" />
                        </Pressable>
                        <Pressable onPress={comingSoon}>
                            <Avatar.Icon size={50} icon="apple" />
                        </Pressable>
                    </View>
                </View>

                <View className='flex flex-row w-full bg-red-500 items-center justify-center py-2'
                    style={{ backgroundColor: theme.colors.primary }}>
                    <Text style={{ color: theme.colors.onPrimary }}>{t('no_account')}</Text>
                    <Button onPress={() => navigation.navigate(ScreenName.SignUp)}>
                        <Text className='underline decoration-solid font-bold' style={{ color: theme.colors.onPrimary }}>
                            {t('sign_up')}
                        </Text>
                    </Button>
                </View>
            </View>

            {/* Dialog thông báo lỗi */}
            <Portal>
                <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Title>{t('error')}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{t('invalid_phone_format')}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)}>{t('ok')}</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </KeyboardAwareScrollView>

    )
}

export default SignIn

const styles = StyleSheet.create({})