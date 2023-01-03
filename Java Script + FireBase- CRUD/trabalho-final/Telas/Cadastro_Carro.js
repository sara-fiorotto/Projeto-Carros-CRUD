import * as React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Styles} from './estilo'



export function Cadastro({navigation: {navigate}}) {
  const [modelo, setModelo] = React.useState('');
  const [marca, setMarca] = React.useState('');
  const [ano, setAno] = React.useState('');

  const cadastrar = async () => {
    await fetch(
      'https://banco1-b29e6-default-rtdb.firebaseio.com/carros/.json',
      {
        method: 'POST',
        body: JSON.stringify({
          modelo: modelo,
          ano: parseInt(ano),
          marca: marca
        }),
      }
    );
  setModelo('');
  setAno('');
  setMarca('');
  };

  return (
    <View>
      <View>
        <TextInput
              placeholder="Marca"
              value={marca}
              onChangeText={(texto) => setMarca(texto)}
              keyboardType="name-phone-pad"
              style={Styles.campo}
            />
      </View>
      <View>
        <TextInput
          placeholder="Ano"
          value={ano}
          onChangeText={(texto) => setAno(texto)}
          keyboardType="numeric"
          style={Styles.campo}
        />
      </View>
      <View>
        <TextInput
          placeholder="Modelo"
          value={modelo}
          onChangeText={(texto) => setModelo(texto)}
          keyboardType="name-phone-pad"
          style={Styles.campo}
        />
      </View>
        <View style={Styles.tamanho_view}>
          <View>
            <Pressable
              onPress={cadastrar}
              style={Styles.botao}>
              <Text style={Styles.texto_botao}>Cadastrar</Text>
          </Pressable>
          </View>
          <View> 
            <Pressable style = {Styles.botao} onPress={()=>{navigate("Menu")}}>
              <Text style = {Styles.texto_botao}>Voltar</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
}





