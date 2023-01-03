import * as React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Styles} from './estilo'


const Imagem2 = () => {
  return (
    <View style = {Styles.tamanho_view} ><Image source={{uri:"https://pbs.twimg.com/profile_images/1382327689982455811/ZYoU-YW4_400x400.jpg"}}
      style={{width:300, height:250}}
    />
    </View>
  );
}

export function Menu({navigation: {navigate}}) {
  return (
    <View>
      <View style = {Styles.tamanho_view}>
        <Text style = {Styles.title}>Cadastre seu Carro</Text>
      </View>
      <View>
        <Imagem2 Image source />
      </View>
      <View style = {Styles.tamanho_view}>
        <View> 
          <Pressable style = {Styles.botao} onPress={()=>{navigate("Cadastro")}}>
            <Text style = {Styles.texto_botao}>Cadastrar</Text>
          </Pressable>
        </View>

        <View> 
          <Pressable style = {Styles.botao} onPress={()=>{navigate("Consulta")}}>
            <Text style = {Styles.texto_botao}>Consulta</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}