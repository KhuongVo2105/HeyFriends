/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';
import "./global.css"
import AuthLayout from './src/screens/auth/_layout';

function App(): React.JSX.Element {

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <>
      <AuthLayout />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
