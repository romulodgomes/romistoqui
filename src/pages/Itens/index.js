import React, { useState, useEffect } from 'react';
import { Text, View, Picker, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


import Container from '../../components/Container';
import Header from '../../components/Header';


import styles from './styles';
import api from '../../services/api';

export default function Itens() {
    const [nome, setNome] = useState('');
    // const [qtd, setQtd] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [categorias, setCategorias] = useState([]);

    async function loadCategorias(){
        const response = await api.get('categorias');
        setCategorias(response.data);
    }

    async function handleCadastrar() {
        const data = {
            nome,
            categoria_id: categoriaSelecionada
        }

        try {
            const response = await api.post('itens', data);

            if (response.status==200)
            alert('Item cadastrado com sucesso');

        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }

    useEffect(() => {
        loadCategorias();
    }, []);

    return (
        <Container>
            <Header />
            <Text style={styles.title}>Adicionar Item</Text>
            <ScrollView style={styles.formulario}>
                <Text style={styles.labelCampo}>Nome do item:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva aqui o nome do item"
                    onChangeText={text => setNome(text)}
                    defaultValue={nome}
                />
                {/* <Text style={styles.labelCampo}>Quantidade:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escreva aqui a quantidade que você já possui"
                    onChangeText={text => setQtd(text)}
                    defaultValue={qtd}
                /> */}
                <Text style={styles.labelCampo}>Selecione a categoria do item:</Text>
                <Picker
                    selectedValue={categoriaSelecionada}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setCategoriaSelecionada(itemValue)}
                >
                    <Picker.Item label='Selecione' value=''/>
                    {categorias.map((categoria) => {
                        return(<Picker.Item key={categoria.id} label={categoria.nome} value={categoria.id} />)
                    })}
                </Picker>
                <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </Container>
    )
}