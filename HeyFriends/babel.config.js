module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel','module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
