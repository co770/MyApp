const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add directories to ignore to prevent ENOSPC errors on Termux
config.resolver.blockList = [
  /.*\/node_modules\/react-native\/ReactAndroid\/.*/,
  /.*\/node_modules\/react-native\/ReactCommon\/.*/,
  /.*\/android\/.*/,
  /.*\/ios\/.*/
];

module.exports = config;
