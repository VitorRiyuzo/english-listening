import React,{useContext, useState, useEffect} from "react";
import {TouchableOpacity} from "react-native";
import { Text, Box, Button, Background } from "../../styles/global";
import {Container, Top, Number, Key, ButtonKey, Row} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AppContext } from '../../context/app';

import {service} from "./services";
export default function Game({navigation}) {
  let context = useContext(AppContext);
  console.log("Game.js");
  console.log("context",context);
  let roundVal = 1;
  const[time, setTime] = useState(5);
  const[round, setRound] = useState(roundVal);
  const[answer, setAnswer] = useState('');
  const[sendAnswer, setSendAnswer] = useState(false);
  const level = context.app.level;
  let rounds = [];
  let number = null;
  let numbers = [];
  const digit = (value)=>{
    if(value == 'back'){
        console.log(answer);
        let number = answer.slice(0, -1);
        setAnswer(number);
    }else{
      console.log(answer);
      let number = answer + value;
      setAnswer(number);
    }
  }
  const play = () =>{
    console.log("play");
    console.log(number)
    service.playNumber(number);
  }
  const send = ()=>{
    setSendAnswer(true);
    setTime(5);
    nextRound();
  }
  const getNumber = ()=>{
    console.log("getNumber");
    console.log("context", context);
    console.log("numbers", numbers);
    service.getNumber(numbers, context.app[level]).then((resp)=>{
      number = resp;
      play();
      setTimeout(() => {
        startTimer();
      }, 2000);
    });
  }
  const startTimer = () =>{
    let time = 5;
    setTime(time);
    let timer = setInterval(() => {
      time = time - 1;
      setTime(time);
      if(time == 0){
        clearInterval(timer);
        console.log("tempo esgotado");
        nextRound();
      }
    }, 1000);
  }
  const nextRound = () =>{
    console.log("next roud");
    //Verifica se está no ultimo round
    console.log("round", round);
    if(round < 3){
      roundVal = round + 1;
      console.log("nextRopund", roundVal);
      setRound(roundVal);
      console.log("answer", answer);
      console.log("number", number);
      // monta objeto do resultado
      let result = { number: number};
      //verifica se o tempo esgotou ou se a pessoa cliou pra enviar
      if (sendAnswer){
        result.answer = answer
      }else{
        result.answer = null
      }
      console.log("result", result);
      // abastece rounds no context
      rounds.push(result);
      console.log("rounds", rounds);
      context.saveApp({rounds:rounds});
      //getNumber();
      //chama a getNumber
    }else{
      //Manda pra resultados
      navigation.navigate("Result");
    }
  }
  useEffect(()=>{
    console.log("UseEffect");
    for(var k in context.app[level]){
      numbers.push(k);
    };
    getNumber();
  },[round])
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Text>{round} / 10</Text>
          <Text>Tempo: {time}</Text>
        </Top>
        <TouchableOpacity onPress={() => { play()}}>
          <AntDesign name="sound" size={30} color="#ebe047" />
        </TouchableOpacity>
        <Number>
          <Text color={"black"}>{answer}</Text>
        </Number>
      </Container>
      <Key>
        <Row>
          <ButtonKey onPress={() => { digit("1") }}>
            <Text color={'black'}>1</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("2") }}>
            <Text color={'black'}>2</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("3") }}>
            <Text color={'black'}>3</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey onPress={() => { digit("4") }}>
            <Text color={'black'}>4</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("5") }}>
            <Text color={'black'}>5</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("6") }}>
            <Text color={'black'}>6</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey onPress={() => { digit("7") }}>
            <Text color={'black'}>7</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("8") }}>
            <Text color={'black'}>8</Text>
          </ButtonKey>
          <ButtonKey onPress={() => { digit("9") }}>
            <Text color={'black'}>9</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey color={'#bb2525'} onPress={() => { digit("back") }}>
            <MaterialCommunityIcons name="backspace-outline" size={24} color="black" />
          </ButtonKey>
          <ButtonKey onPress={() => { digit("0") }}>
            <Text color={'black'}>0</Text>
          </ButtonKey>
          <ButtonKey color={'#78b319'} onPress={() => { send() }}>
            <MaterialCommunityIcons name="send" size={24} color="black" />
          </ButtonKey>
        </Row>
      </Key>
    </Background>
  );
}
