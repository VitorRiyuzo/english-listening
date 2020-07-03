import React,{useContext, useState, useEffect, useRef} from "react";
import {TouchableOpacity} from "react-native";
import { Text, Box, Button, Background } from "../../styles/global";
import {Container, Top, Number, Key, ButtonKey, Row} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AppContext } from '../../context/app';
import Keyboard from './Keyboard';
import Timer from './Timer';
import Round from './Rounds';
import {service} from "./services";
import {global} from "../../services/global"
export default function Game({route, navigation}) {
  console.log("Game.js");
  const context = useContext(AppContext);
  const answerValue = useRef("");
  const[answer, setAnswer] = useState('');
  const level = context.level;
  const results = useRef(null);
  const number = useRef(null);
  const numbers = useRef(null);
  const play = () =>{
    console.log("Game:toca o som")
    global.playNumber(number.current);
  }
  const keyCallback = (value)=>{
    if (value == 'back') {
      answerValue.current = answerValue.current.slice(0, -1)
      setAnswer(answerValue.current);
    } else if(value == 'send') {
      updateResult(true); 
      //context.saveApp({timer:"stop"});
    }else{
      answerValue.current = answerValue.current + value;
      setAnswer(answerValue.current);
    }
  }
  //Recebe eventos do componente Timer, caso o tempo seja esgotado
  const timerCallback = () =>{
    updateResult(false);
  }
  const roundCallback = ()=>{
    console.log("Round callback");
    navigation.navigate("Result");
  }
  const getNumber = ()=>{
    service.getNumber(numbers.current, context.app[level]).then((resp)=>{
      number.current = resp;
      console.log("Game: pegou o número");
      play();
      setTimeout(() => {
        console.log("Game: timer start")
        context.saveTimer('start');
      }, 1000);
    });
  }
  const updateResult = (resp)=>{
    console.log("Game: updateResult")
    let result = { number: Object.assign({}, number)};
    if (resp) {
      result.answer = answerValue.current;
    } else {
      result.answer = null;
    }
    setAnswer('');
    answerValue.current = "";
    console.log("Game: result", result);
    console.log("Game: results.current",results.current);
    if(!results.current){
      results.current = [];
    }
    results.current.push(result);
    //avança o round e para o timer
    console.log("Game: timer stop");
    console.log("context valor timer", context.timer);
    context.saveTimer('stop');
    console.log("context valor timer depois de atualizar", context.timer);
    if (context.round < 2){
      context.saveRound(context.round + 1);
      console.log("Game: avançou o round");
    }else{
      console.log("Game: Finalizou, results", results.current);
      context.saveResult( results.current );
      results.current = null;
      navigation.navigate("Result");
    }
  }
  useEffect(()=>{
    if (context.round){
      console.log("Game: UserEffect")
      console.log("Game: context round", context.round);
      //Verifica se é o ultimo round e manda zerar
      
      if(!numbers.current){
        console.log("Game: numero vazio");
        numbers.current = [];
      }
      if(numbers.current.length == 0){
        for (var k in context.app[level]){
          numbers.current.push(k);
        };
        console.log("Game: numbers", numbers);
      }
      getNumber();
    }
  }, [context.round])
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Round callback={roundCallback}></Round>
          <Timer callback={timerCallback}></Timer>
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
