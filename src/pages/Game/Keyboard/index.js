import React, { useContext, useState, useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, Box, Button, Background } from "../../../styles/global";
import { Container, Top, Number, Key, ButtonKey, Row } from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../../../context/app';
export default function Keyboard(props) {
  console.log("Keyboard");
  console.log("Keyboard props",props);
  const digit = (value) => {
    props.callback(value);
  }
  return(
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
        <ButtonKey color={'#78b319'} onPress={() => { digit("send") }}>
          <MaterialCommunityIcons name="send" size={24} color="black" />
        </ButtonKey>
      </Row>
    </Key>
  )
}