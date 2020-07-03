import React, { useContext, useState, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Text, Box, Button, Background } from "../../../styles/global";
import { Container, Top, Number, Key, ButtonKey, Row } from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../../../context/app';

export default function Rounds(props) {
	console.log("Rounds");
	const roundValue = useRef(0);
	const context = useContext(AppContext);
	
	// if (!context.round) {
	// 	console.log("Rounds: Não tem round está iniciando um");
	// 	context.saveRound(1);
	// }
	const [round, setRound] = useState(1);
	const nextRound = () => {
		console.log("Rounds: nextRound");
		console.log("Rounds: roundAtual", roundValue.current)
		if (roundValue.current < 2) {
			console.log("Rounds: ainda não acabou os rounds");
			roundValue.current++;
			setRound(roundValue.current);
		} else {
			//não chega aqui
			finishGame();
		}
	}
	const finishGame = ()=>{
		console.log("Rounds: finishGame");
		roundValue.current = 1;
		context.saveRound(1);
		setRound(1);
	} 
	useEffect(()=>{
		if (context.round){
			console.log("Rounds: Rounds useEffect");
			console.log("Rounds: context round", context.round);
			//executa na troca de round
			nextRound();
		}
	},[context.round])
	return (
		<Text>{round} / 10</Text>
	)
}