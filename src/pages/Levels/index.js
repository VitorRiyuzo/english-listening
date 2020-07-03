import React,{useState, useEffect, useContext, useRef} from "react";
//import { Text } from "react-native";
import { Text, Box,Button, Background} from "../../styles/global";
import {Container, Level,Logo, Img, Timer} from "./styles";
import {AppContext} from "../../context/app";
import {Switch, Alert} from "react-native";
import { getNumbers, setLevelFire } from "./services";
export default function Levels({ navigation }) {
    console.log("Levels");
    const context = useContext(AppContext);
    const [level, setLevel] = useState({easy:false,medium:false,hard:false});
    const[isLevel, setIslevel] = useState(false);
    const [timer, setTimer] = useState(null);
    const load = useRef(false);

    const toggleSwitch = (n) => {
      let newLevel = {easy: false, medium: false, hard: false};
      newLevel[n] = true;
      context.saveLevel(n);
      setLevel(newLevel);
      setIslevel(true);
    }
    const startTimer = ()=>{
      let timer = 3;
      let time = setInterval(() => {
        timer = timer - 1;
        setTimer(timer.toString());
        if (timer == 0) {
          clearInterval(time);
          setTimer(null);
          navigation.navigate("Game");
        }
      }, 1000);
    }
    const start = ()=>{
      if(isLevel){
        let level = context.level;
        console.log("level",level);
        setTimer(3);
        if(level){
          if (context.app[level]){
            startTimer();
          }else{
            load.current = true;
            getNumbers(level).then((resp) => {
              console.log("Level: resp",resp);
              load.current = false;
              let newContext = {};
              newContext[level] = resp;
              context.saveApp(newContext);
              startTimer();
              console.log("Level:context",context);
            });
          }
        }
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
      <Background
        resizeMode="cover"
        source={require("../../assets/img/bg.png")}
      >
        <Container>
          {timer && (
            <Timer>
              {load.current && (
                <Text fS={35} tA={"center"}>
                  Carregando ...
                </Text>
              )}
              {!load.current && (
                <Box>
                  <Text fS={35} tA={"center"}>
                    O JOGO COMEÇARÁ EM:
                  </Text>
                  <Text tA={"center"}  fS={35}>
                    {timer}
                  </Text>
                </Box>
              )}
            </Timer>
          )}
          <Logo>
            <Img
              resizeMode="contain"
              source={require("../../assets/img/logo.png")}
            ></Img>
          </Logo>
          <Box mT={50} mB={50}>
            <Text fS={30}>NÍVEL</Text>
          </Box>
          <Level>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.easy ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                toggleSwitch("easy");
              }}
              value={level.easy}
            ></Switch>
            <Text fS={12}>FÁCIL (1/100)</Text>
          </Level>
          <Level>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.medium ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                toggleSwitch("medium");
              }}
              value={level.medium}
            ></Switch>
            <Text fS={12}>MÉDIO (100/1.000)</Text>
          </Level>
          <Level>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={level.hard ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                toggleSwitch("hard");
              }}
              value={level.hard}
            ></Switch>
            <Text fS={12}>DIFÍCIL (1.000/100.000)</Text>
          </Level>
          <Box mT={50}>
            <Button.Primary
              onPress={() => {
                start();
              }}
            >
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
