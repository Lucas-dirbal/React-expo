import React from 'react';
import {ScrollView} from 'react-native';
import Titulo from './components/Titulo';
import FotoPerfil from './components/FotoPerfil';
import Saudacao from './components/Saldacao';
import CartaoUsuario from './components/CartaoUsuario';

export default function App(){
  return(
    <ScrollView>
    
    <Titulo />
    <Saudacao nome='Lucas' />
    <FotoPerfil/>


    <CartaoUsuario 
    nome='willi'
    descricao='wonka'
    img='perfil00' />

    <CartaoUsuario 
    nome='Kauany emo'
    descricao='Emo'
    img='perfil01' />

    <CartaoUsuario 
    nome='Vini'
    descricao='Saudades eternas'
    img='perfil02' />

    <CartaoUsuario 
    nome='Neto querido'
    descricao='Tem peixe'
    img='perfil03' />



    </ScrollView>
  );
}