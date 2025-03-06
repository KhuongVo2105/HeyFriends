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
    colors: {
        ...MD3LightTheme.colors,  // Giữ lại các thuộc tính mặc định
        ...LightScheme.colors     // Ghi đè bằng các màu custom
    }
}

const DarkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,   // Giữ lại các thuộc tính mặc định
        ...DarkScheme.colors      // Ghi đè bằng các màu custom
    }
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
