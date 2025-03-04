module.exports = {
    project: {
        ios: {},
        android: {},
    },
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    },
    assets: [
        './node_modules/react-native-international-phone-number/lib/assets/fonts',  // Thêm assets của thư viện mới
    ],
};