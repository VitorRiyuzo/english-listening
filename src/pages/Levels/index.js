import React,{useState, useEffect} from "react";
//import { Text } from "react-native";
import { Text, Box,Button, Background} from "../../styles/style";
import {Content, Group, Level} from "./styles";
import {Switch} from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
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
        <Content>
          <Box mT={50} mB={50}>
            <Text fS={30}>Nível</Text>
          </Box>
          <Group>
            <Level>
              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
                <Text>Fácil</Text>
            </Level>
            <Level>
              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
              <Text>Médio</Text>
            </Level>
            <Level>
              <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}></Switch>
              <Text>Difícil</Text>
            </Level>
          </Group>
          <Box>
            <Button>
              <Text>Começar</Text>
            </Button>
          </Box>
        </Content>
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
