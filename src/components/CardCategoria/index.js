import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import api from '../../services/api';
import styles from './styles';

export default function CardCategoria({categoria}) {
    const [itens, setItens] = useState([]);

    async function loadItens(categoria){
        const response = await api.get('itensPorCategoria/'+ categoria.id);
        setItens(response.data);
    }

    useEffect(() => {
        loadItens(categoria);
    }, []);

    return (
        <View style={styles.card}>
            <Text style={styles.categoria}>{categoria.nome}</Text>
            {
                itens.map(item => {
                    return(
                            <Text key={item.id} style={styles.item}>{item.nome}</Text>
                       )
                })
            }
            <View style={styles.separator}/>
        </View>
    )
}