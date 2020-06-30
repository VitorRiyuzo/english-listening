import React,{useContext, useState, useEffect, useRef} from "react";
import {TouchableOpacity} from "react-native";
import { Text, Box, Button, Background } from "../../styles/global";
import {Container, Top, Number, Key, ButtonKey, Row} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AppContext } from '../../context/app';

import {service} from "./services";
export default function Game({route, navigation}) {
  let params = route.params;
  navigation.addListener('didFocus', () => console.log('x'))
  console.log("Game.js");
  let context = useContext(AppContext);
  const timeValue = useRef(10);
  const roundValue = useRef(1);
  const[time, setTime] = useState(10);
  const[round, setRound] = useState(1);
  const[answer, setAnswer] = useState('');
  const level = context.app.level;
  const results = useRef(null);
  const number = useRef(null);
  const numbers = useRef(null);
  const finish = useRef(false);
  console.log("params", params);
  if(!params){
    params = {};
  }
  if (params.update) {
    console.log("results", results);
    console.log("number", number);
    console.log("finish", finish);
    console.log("numbers", numbers);
    console.log("round", round);
    console.log("time", time);
    console.log("roundValue", roundValue);
    console.log("timeValue", timeValue);
  }
  const digit = (value)=>{
    if(value == 'back'){
        let number = answer.slice(0, -1);
        setAnswer(number);
    }else{
      let number = answer + value;
      setAnswer(number);
    }
  }
  const play = () =>{
    service.playNumber(number.current);
  }
  const send = ()=>{
    updateResult(true);
  }
  const getNumber = ()=>{
    service.getNumber(numbers.current, context.app[level]).then((resp)=>{
      number.current = resp;
      play();
      timeValue.current = 10;
      setTime(10);
    });
  }
  const startTimer = () =>{
    let nextTime = ()=>{
      if(!finish.current){
        setTimeout(() => {
          timeValue.current = timeValue.current - 1;
          setTime(timeValue.current);
          if (timeValue.current == 0) {
            console.log("tempo esgotado");
            if(!finish.current){ 
              updateResult(false);
            }
          }else{
            if(roundValue.current<=2 && !finish.current){
              nextTime();
            }
          }
        }, 1000);
      }
    }
    nextTime();
  }
  const nextRound = () =>{
    if(roundValue.current < 2){
      roundValue.current++;
      setRound(roundValue.current);
    }else{
      context.saveApp({result:results.current});
      finish.current = true;
      navigation.navigate("Result");
    }
  }
  const updateResult = (resp)=>{
      let result = { number: Object.assign({}, number)};
      if (resp) {
        result.answer = answer;
      } else {
        result.answer = null;
      }
      setAnswer('');
      if(!results.current){
        results.current = [];
      }
      results.current.push(result);
      nextRound();
  }
  useEffect(()=>{
    if(!numbers.current){
      numbers.current = [];
    }
    if(numbers.current.length == 0){
      startTimer();
      for(var k in context.app[level]){
        numbers.current.push(k);
      };
      console.log("numbers", numbers);
    }
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
