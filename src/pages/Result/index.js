import React from "react";
import { Text, Button, Background } from "../../styles/global";
import { Container, Table, Row, Top, ScrollView} from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
export default function Result({navigation}) {
  return (
    <Background resizeMode="cover" source={require("../../assets/img/bg.png")}>
      <Container>
        <Top>
          <Text fS={26}>SCORE</Text>
          <Text>FÁCIL</Text>
        </Top>
        <ScrollView>
          <Table>
            <Row>
              <Text fS={10}>NÚMERO</Text>
              <Text fS={10}>RESPOSTA</Text>
              <Text fS={10}>ÁUDIO</Text>
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
            <Row>
              <Text fS={10}>15</Text>
              <Text fS={10}>23</Text>
              <AntDesign name="sound" size={10} color="#ebe047" />
            </Row>
          </Table>
        </ScrollView>
        <Button.Primary mT={10} mB={10} onPress={() => navigation.navigate("Game")}>
          <Text>JOGAR NOVAMENTE</Text>
        </Button.Primary>
        <Button.Secondary mT={10} mB={10} onPress={() => navigation.navigate("Level")}>
          <Text>TROCAR DE NÍVEL</Text>
        </Button.Secondary>
      </Container>
    </Background>
  );
}
