/**
 * @format
 */

import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { LightScheme } from './src/theme/lightScheme';
import { DarkScheme } from './src/theme/darkScheme';

const LightTheme = {
    ...MD3LightTheme,
    color: LightScheme
}

const DarkTheme = {
    ...MD3DarkTheme,
    color: DarkScheme
}

export default function Main() {

    const colorScheme = useColorScheme()

    const theme = colorScheme === 'dark' ? DarkTheme : LightTheme

    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
