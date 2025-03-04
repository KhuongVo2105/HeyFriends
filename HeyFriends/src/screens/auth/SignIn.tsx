import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Avatar, Button, Divider, Menu, TextInput, useTheme } from 'react-native-paper'
import { AuthStackParamList } from '../../types/navigation'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenName from '../../constant/ScreenName'
import PhoneInput, { ICountry, isValidPhoneNumber } from 'react-native-international-phone-number'
import CustomDivider from '../../components/CustomDivider'

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>

const SignIn = ({ navigation }: Props) => {
    const theme = useTheme()

    const [selectedCountry, setSelectedCountry] =
        useState<null | ICountry>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    function handleInputValue(phoneNumber: string) {
        setInputValue(phoneNumber);
    }

    function handleSelectedCountry(country: ICountry) {
        setSelectedCountry(country);
    }

    return (
        <View className='w-full h-full flex items-center justify-between'
            style={{ backgroundColor: theme.colors.background }}
        >

            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Item 3" />
                </Menu>
            </View>

            <View className=' flex flex-row justify-items-center'>
                <Avatar.Image size={150} source={require('../../assets/splash.png')} />
            </View>


            <View className='w-96'>
                <PhoneInput
                    value={inputValue}
                    onChangePhoneNumber={handleInputValue}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={handleSelectedCountry}
                />
                {/* <View style={{ marginTop: 10 }}>
                    <Text>
                        Country:{' '}
                        {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
                    </Text>
                    <Text>
                        Phone Number:{' '}
                        {`${selectedCountry?.callingCode} ${inputValue}`}
                    </Text>
                    <Text>
                        isValid:{' '}
                        {isValidPhoneNumber(inputValue, selectedCountry)
                            ? 'true'
                            : 'false'}
                    </Text>
                </View> */}
            </View>

            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Sign In
            </Button>

            <CustomDivider content='Or' />

            <View className='flex flex-row w-64 justify-between'>
                <Avatar.Icon size={50} icon="facebook" />
                <Avatar.Icon size={50} icon="google" />
                <Avatar.Icon size={50} icon="apple" />
            </View>

            <View className='flex flex-row w-full bg-red-500 items-center justify-center'>

                <Text>Banj chua co tai khoan?</Text>
                <Button onPress={() => navigation.navigate(ScreenName.SignUp)}>
                    Go to SignUp
                </Button>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})