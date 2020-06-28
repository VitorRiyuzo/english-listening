import React,{useState, useEffect, useContext} from "react";
//import { Text } from "react-native";
import { Text, Box,Button, Background} from "../../styles/global";
import {Container, Level,Logo, Img, Timer} from "./styles";
import {AppContext} from "../../context/app";
import {Switch, Alert} from "react-native";
export default function Levels({ navigation }) {
    const context = useContext(AppContext);
    const [level, setLevel] = useState({easy:false,medium:false,hard:false});
    const[isLevel, setIslevel] = useState(false);
    const [timer, setTimer] = useState(null);

    const toggleSwitch = (n) => {
      let newLevel = {easy: false, medium: false, hard: false};
      newLevel[n] = true;
      context.saveApp({level:n});
      setLevel(newLevel);
      setIslevel(true);
    }
    const start = ()=>{
      if(isLevel){
        let timer = 3
        setTimer(timer.toString());
        let time = setInterval(() => {
          timer = timer-1;
          setTimer(timer.toString());
          if(timer == 0){
            clearInterval(time);
            navigation.navigate('Game');
          }
        }, 1000);
      }else{
          Alert.alert(
            "Selecione um nível",
            "Você precisa escolher um nível",
            [
              { text: "OK", onPress: () => {}}
            ],
            { cancelable: false }
          );
      }
    }
    return (
      <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
        <Container>
          {timer && <Timer>
            <Text fS={35} tA={'center'}>O JOGO COMEÇARÁ EM:</Text>
          <Text fS={35}>{timer}</Text>
          </Timer> }
          <Logo>
            <Img resizeMode="contain" source={require('../../assets/img/logo.png')}></Img>
          </Logo>
          <Box mT={50} mB={50}>
            <Text fS={30}>NÍVEL</Text>
          </Box>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.easy ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>{toggleSwitch('easy')}}
              value={level.easy}></Switch>
            <Text fS={12}>FÁCIL (1/100)</Text>
          </Level>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.medium ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>{toggleSwitch('medium')}}
              value={level.medium}></Switch>
            <Text fS={12}>MÉDIO (100/1.000)</Text>
          </Level>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.hard ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={()=>{toggleSwitch('hard')}}
              value={level.hard}></Switch>
            <Text fS={12}>DIFÍCIL (1.000/100.000)</Text>
          </Level>
        <Box mT={50}>
          <Button.Primary onPress={() =>{start()}}>
            <Text>COMEÇAR</Text>
          </Button.Primary>
        </Box>
        </Container>
      </Background>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
