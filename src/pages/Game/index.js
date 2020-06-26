import React from "react";
import {} from "react-native";
import { Text, Box, Button, Background } from "../../styles/global";
import {Container, Top, Number, Key, ButtonKey, Row} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function Game({navigation}) {
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Text>1 / 10</Text>
          <Text>Tempo: 5</Text>
        </Top>
        <AntDesign name="sound" size={30} color="#ebe047" />
        <Number>
          <Text color={"black"}>55</Text>
        </Number>
      </Container>
      <Key>
        <Row>
          <ButtonKey>
            <Text color={'black'}>1</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>2</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>3</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey>
            <Text color={'black'}>4</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>5</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>6</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey>
            <Text color={'black'}>7</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>8</Text>
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>9</Text>
          </ButtonKey>
        </Row>
        <Row>
          <ButtonKey color={'#bb2525'}>
            <MaterialCommunityIcons name="backspace-outline" size={24} color="black" />
          </ButtonKey>
          <ButtonKey>
            <Text color={'black'}>0</Text>
          </ButtonKey>
          <ButtonKey color={'#78b319'}>
            <MaterialCommunityIcons name="send" size={24} color="black" />
          </ButtonKey>
        </Row>
      </Key>
    </Background>
  );
}
