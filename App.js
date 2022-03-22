import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App(){

  const[display, displaySet]=useState(0);
  const[memoria, memoriaSet]=useState(0);
  const[operador, operadorSet]=useState(0);
  const[calculado,calculadoSet]=useState(false);

  function tecla(valor){
    if(display==0||calculado){
      calculadoSet(false);
      displaySet(valor);
    }
    else displaySet(display.toString()+valor.toString())
  }

  function limpar(){
    displaySet(0);
    memoriaSet(0);
    operadorSet(0);
  }

  function limparDisplay(){
    displaySet(0);
  }
  
  function operacao(value){
    memoriaSet(display);
    if(operador==0){
      displaySet(0);
      operadorSet(value);
    }else calcular();
  }

  function inverter(){
    displaySet(parseFloat(display)*-1)
  }

  function calcular(){
    if(operador=="+") displaySet(parseFloat(memoria)+parseFloat(display));
    if(operador=="-") displaySet(parseFloat(memoria)-parseFloat(display));
    if(operador=="*") displaySet(parseFloat(memoria)*parseFloat(display));
    if(operador=="/") displaySet(parseFloat(memoria)/parseFloat(display));
    calculadoSet(true);
  }

  function ponto(){
    displaySet(display.toString()+".");
  }

  return(
    <View style={{
      width:120,
      borderColor:'red',
      borderWidth:2,
      padding:5,
      borderRadius:10,
      margin:50,
      alignItems:'center',
      justifyContent:'center'
      }}>
        <Text>{display}</Text>
        <View style={{
        flexDirection:"row",
      }}>
        <Button onPress={()=>limparDisplay()} title="CE"/>
        <Button onPress={()=>limpar()} title="C"/>
        <Button onPress={()=>limpar()} title="<"/>
        <Button onPress={()=>operacao("/")} title="/"/>
      </View>
        <View style={{
        flexDirection:"row",
      }}>
        <Button onPress={()=>tecla(1)} title="1"/>
        <Button onPress={()=>tecla(2)} title="2"/>
        <Button onPress={()=>tecla(3)} title="3"/>
        <Button onPress={()=>operacao("+")} title="+"/>
      </View>
      <View style={{
        flexDirection:"row",
      }}>
        <Button onPress={()=>tecla(4)} title="4"/>
        <Button onPress={()=>tecla(5)} title="5"/>
        <Button onPress={()=>tecla(6)} title="6"/>
        <Button onPress={()=>operacao("-")} title="-"/>
      </View>
      <View style={{
        flexDirection:"row",
      }}>
        <Button onPress={()=>tecla(7)} title="7"/>
        <Button onPress={()=>tecla(8)} title="8"/>
        <Button onPress={()=>tecla(9)} title="9"/>
        <Button onPress={()=>operacao("*")} title="*"/>
      </View>
      <View style={{
        flexDirection:"row",
      }}>
        <Button onPress={()=>inverter()} title="+/-"/>
        <Button onPress={()=>tecla("0")} title="0"/>
        <Button onPress={()=>ponto()} title="."/>
        <Button onPress={()=>calcular()} title="="/>
      </View>
    </View>
  );
}