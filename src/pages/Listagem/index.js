import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import Header from '../../components/Header'
import Container from '../../components/Container';
import CardCategoria from '../../components/CardCategoria';
import CardContainer from '../../components/CardContainer';


import logoImg from '../../../assets/logo.png'
import styles from './styles';
import api from '../../services/api'


export default function Listagem() {
    const [categorias, setCategorias] = useState([]);

    async function loadCaterigorias() {
        const response = await api.get('categorias');
        setCategorias(response.data);
    }

    useEffect(() => {
        loadCaterigorias();
    }, []);



    return (
        <Container>
            <Header />
            <CardContainer> 
                <FlatList 
                    data = {categorias}
                    keyExtractor = {categoria => String(categoria.id)}
                    showsVerticalScrollIndicator = {true}
                    renderItem = {({ item: categoria } ) => (
                        <CardCategoria categoria={categoria}/>
                    )}
                />
            </CardContainer>
        </Container>
    )
}