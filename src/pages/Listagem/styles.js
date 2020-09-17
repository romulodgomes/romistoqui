import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#00b894',
        paddingHorizontal: 24,
        height: 70,
        alignItems: 'center'
    },

    headerImage: {
        height: 45,
        width: 60
    },

    headerText: {
        fontSize: 20,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        paddingRight: 20
    }
});