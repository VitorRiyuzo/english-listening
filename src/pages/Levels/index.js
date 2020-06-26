import React,{useState, useEffect} from "react";
//import { Text } from "react-native";
import { Text, Box,Button, Background} from "../../styles/global";
import {Container, Level} from "./styles";
import {Switch} from 'react-native';
export default function Levels({ navigation }) {
    // useEffect(()=>{
    //   Font.loadAsync({
    //     "eras-bold": require("../../assets/fonts/ERASBD.ttf"),
    //   });
    // })
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
        <Container>
          <Box mT={50} mB={50}>
            <Text fS={30}>NÍVEL</Text>
          </Box>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}></Switch>
              <Text>FÁCIL</Text>
          </Level>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}></Switch>
            <Text>MÉDIO</Text>
          </Level>
          <Level>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}></Switch>
            <Text>DIFÍCIL</Text>
          </Level>
        <Box mT={50}>
          <Button.Primary onPress={() => navigation.navigate("Game")}>
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
