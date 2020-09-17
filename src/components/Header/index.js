import React from 'react';
import { View, Text, Image } from 'react-native';


import logoImg from '../../../assets/logo.png'

import styles from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={logoImg} style={styles.headerImage} />
            <Text style={styles.headerText}>Controle sua dispensa e suas compras!</Text>
        </View>
    )
}