import React, { useContext, useState, useEffect, useRef } from "react";
import { Text, Button, Background} from "../../styles/global";
import { Container, Table, Row, Top,View } from "./styles";
import {ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { AppContext } from "../../context/app";
import {global} from '../../services/global';
export default function Result({navigation}) {
  const context = useContext(AppContext);
  console.log("Result.js");
  const numbers = context.result;
  const[results, setResults] = useState(numbers);
  const play = (song) =>{
    console.log("song",song);
    global.playNumber(song.number.current);
  }
  const newPlay = ()=>{
    console.log("NewPlay");
    navigation.navigate("Game");
    context.saveStatus("start");
  }
  const changeLevel = ()=>{
    console.log("Change level")
    navigation.navigate("Level");
  }
  useEffect(()=>{
    console.log(results);
  },[])
 
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Text fS={26}>SCORE</Text>
          <Text>FÁCIL</Text>
        </Top>
        <View>
          <ScrollView>
            <Table>
              <Row>
                <Text fS={10}>NÚMERO</Text>
                <Text fS={10}>RESPOSTA</Text>
                <Text fS={10}>ÁUDIO</Text>
              </Row>
              <FlatList
                data={numbers}
                renderItem={({ item }) => <Row>
                  <Text fS={10}>{item.number.current.n}</Text>
                  <Text fS={10}>{item.answer}</Text>
                  <TouchableOpacity onPress={() => {play(item)}}>
                    <AntDesign name="sound" size={20} color="#ebe047" />
                  </TouchableOpacity>
                </Row>}
              />
            </Table>
          </ScrollView>
        </View>
        <Button.Primary
          mT={10}
          mB={10}
          onPress={() => {newPlay()}}
        >
          <Text>JOGAR NOVAMENTE</Text>
        </Button.Primary>
        <Button.Secondary
          mT={10}
          mB={10}
          onPress={() => {changeLevel()}}
        >
          <Text>TROCAR DE NÍVEL</Text>
        </Button.Secondary>
      </Container>
    </Background>
  );
}
