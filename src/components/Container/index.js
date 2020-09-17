import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function Container({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}