import React, { useContext, useState, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Text, Box, Button, Background } from "../../../styles/global";
import { Container, Top, Number, Key, ButtonKey, Row } from "../styles";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../../../context/app';

export default function Timer(props) {
	console.log("Timer");
	console.log("props",props);
	const [time, setTime] = useState(10);
	const valueRef = useRef(10);
	const timerInterval = useRef(null);
	const startTimer = () => {
		timerInterval.current = setInterval(() => {
			valueRef.current = valueRef.current - 1;
			console.log("Timer: tempo rodando "+valueRef.current)
			setTime(valueRef.current);
			if (valueRef.current == 0) {
				props.callback();
				setTime(10)
			}
		}, 1000);
	}
	useEffect(()=>{
		//executa sempre que trocar de round
		//zera o contador do timer em 10
		//inicia o timer apenas uma vez
		if (props.event == 'start'){
			startTimer();
			valueRef.current = 10;
			setTime(10);
		}
		if(props.event == 'stop'){
			clearInterval(timerInterval.current);
			setTimeout(() => {
				valueRef.current = 10;
				setTime(10);
			}, 500);
		}
	},[props.event])
	return (
		<Text>Tempo: {time}</Text>
	)
}