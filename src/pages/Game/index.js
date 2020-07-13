import React,{useContext, useState, useEffect, useRef} from "react";
import {TouchableOpacity} from "react-native";
import { Text, Box, Button, Background } from "../../styles/global";
import {Container, Top, Number, Key, ButtonKey, Row} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { AppContext } from '../../context/app';
import Keyboard from './Keyboard';
import Timer from './Timer';
import {service} from "./services";
import {global} from "../../services/global"
export default function Game({route, navigation}) {
  console.log("Game.js");
  const context = useContext(AppContext);
  const answerValue = useRef("");
  const[answer, setAnswer] = useState('');
  const[timer, setTimer] = useState('stop');
  const[round, setRound] = useState(1);
  const level = context.level;
  const results = useRef(null);
  const number = useRef(null);
  const numbers = useRef(null);
  const play = () =>{
    global.playNumber(number.current);
  }
  const keyCallback = (value)=>{
    if (value == 'back') {
      answerValue.current = answerValue.current.slice(0, -1)
      setAnswer(answerValue.current);
    } else if(value == 'send') {
      updateResult(true); 
    }else{
      answerValue.current = answerValue.current + value;
      setAnswer(answerValue.current);
    }
  }
  //Recebe eventos do componente Timer, caso o tempo seja esgotado
  const timerCallback = () =>{
    updateResult(false);
  }
  const getNumber = ()=>{
    service.getNumber(numbers.current, context.app[level]).then((resp)=>{
      number.current = resp;
      play();
      setTimeout(() => {
        setTimer('start');
      }, 2000);
    });
  }
  const updateResult = (resp)=>{
    let result = { number: Object.assign({}, number)};
    if (resp) {
      result.answer = answerValue.current;
    } else {
      result.answer = "—";
    }
    if(result.answer == result.number.current.n){
      result.color = "#78b319";
    }else{
      result.color = "red";
    }
    setAnswer('');
    answerValue.current = "";
    if(!results.current){
      results.current = [];
    }
    results.current.push(result);
    setTimer('stop');
    if (round < 10){
      setRound(round+1);
      getNumber();
    }else{
      context.saveResult( results.current );
      results.current = null;
      setRound(1);
      navigation.navigate("Result");
      context.saveStatus("stop");
    }
  }
  if(context.status == 'start'){
    context.saveStatus("playing");
    if(!numbers.current){
      numbers.current = [];
    }
    if(numbers.current.length == 0){
      for (var k in context.app[level]){
        numbers.current.push(k);
      };
    }
    getNumber();
  }
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Text>{round} / 10</Text>
          <Timer callback={timerCallback} event={timer}></Timer>
        </Top>
        <TouchableOpacity onPress={() => { play()}}>
          <AntDesign name="sound" size={30} color="#ebe047" />
        </TouchableOpacity>
        <Number>
          <Text color={"black"}>{answer}</Text>
        </Number>
      </Container>
      <Keyboard callback={keyCallback}></Keyboard>
    </Background>
  );
}
