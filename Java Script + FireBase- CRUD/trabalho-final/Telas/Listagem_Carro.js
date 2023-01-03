import * as React from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import {Styles} from './estilo'

const Linha = ({ item }) => {
  return (
    <Pressable onLongPress={() => confirm('deseja excluir?')}>
      <Text style={Styles.item}>
        {item.modelo} - {item.ano} - {item.marca}
      </Text>
    </Pressable>
  );
};

export function Consulta ({navigation: {navigate}}) {
  const [lista, setLista] = React.useState([]);
  const consultar = async () => {
  try {
    let resposta = await fetch(
      'https://banco1-b29e6-default-rtdb.firebaseio.com/carros/.json'
    );
    let json = await resposta.json();
    let listaDeNomes = Object.keys(json);
    let listaDados = listaDeNomes.map((modelo) => ({
      ...json[modelo],
      key: modelo,
    }));
    setLista(listaDados);
  } catch (err) {
    console.error(err);}
  }
  consultar()
  return (
     <View style = {Styles.tamanho_view}> 
      <View style={Styles.container}>
        <Text style = {Styles.title}>Consulta de Cadastro</Text>
      <FlatList data={lista} renderItem={Linha} />
    </View>
    <View> 
      <Pressable style = {Styles.botao} onPress={()=>{navigate("Menu")}}>
        <Text style = {Styles.texto_botao}>Voltar</Text>
      </Pressable>
    </View>
  </View>
  );
}

