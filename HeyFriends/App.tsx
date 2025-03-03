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
import SignIn from './src/SignIn';
import "./global.css"

function App(): React.JSX.Element {

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <>
      <SignIn />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
