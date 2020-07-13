import React,{useState, useEffect, useContext, useRef} from "react";
//import { Text } from "react-native";
import { Text, Box,Button, Background} from "../../styles/global";
import {Container, Level,Logo, Img, Timer} from "./styles";
import {AppContext} from "../../context/app";
import {Switch, Alert} from "react-native";
import { getNumbers, setLevelFire } from "./services";
import * as Permissions from "expo-permissions";
export default function Levels({ navigation }) {
    const context = useContext(AppContext);
    const [level, setLevel] = useState({easy:false,medium:false,hard:false});
    const[isLevel, setIslevel] = useState(false);
    const [timer, setTimer] = useState(null);
    const load = useRef(false);

    const toggleSwitch = (n) => {
      //Switch escolhe um level e armazena na state
      let newLevel = {easy: false, medium: false, hard: false};
      newLevel[n] = true;
      setLevel(newLevel);
      context.saveLevel(n);
      setIslevel(true);
    }
    const startTimer = ()=>{
      //inicia o contador para ir para a próxima tela
      let timer = 3;
      let time = setInterval(() => {
        timer = timer - 1;
        setTimer(timer.toString());
        if (timer == 0) {
          //Zerou, inicia o jogo
          clearInterval(time);
          setTimer(null);
          context.saveStatus("start");
          navigation.navigate("Game");
        }
      }, 1000);
    }
    const start = ()=>{
      getPermissionAsync(()=>{
        // Clica em começar
        //Verifica se selecionou algum level
        if(isLevel){
          //Verifica se já existe uma lista de músicas no context
          if (context.app[context.level]){
            startTimer();
          }else{
            //Não tem a lista, baixa da API e armazena no context
            //inicia Timer(sem iniciar a contagem) e o load para carregar os números
            load.current = true;
            setTimer("3");
            getNumbers(context.level).then((resp) => {
              load.current = false;
              let numbers ={};
              numbers[context.level]= resp;
              context.saveApp(numbers);
              //Inicia o Timer
              startTimer();
            });
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
      });
    }
    async function getPermissionAsync(callback) {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status, permissions } = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING
      );
      if (status === "granted") {
        callback();
        return AUDIO_RECORDING.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
      } else {
        Alert.alert(
          "Permissão negada",
          "Você precisa dar permissão para usar o áudio do dispositivo",
          [{ text: "OK", onPress: () => {} }],
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
