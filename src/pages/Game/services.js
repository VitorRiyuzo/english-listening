// auth-service.js
import { Audio } from "expo-av";
export const service = {
	getNumber: (numbers, objNumbers)=>{
		return new Promise((resolve, reject) => {
			console.log("service");
			let indice = Math.floor(numbers.length * Math.random());
			console.log("numbers", numbers);
			console.log("indice", indice);
			number = objNumbers[numbers[indice]];
			console.log("number");
			console.log(number);
			resolve(number);
		});
	},
	playNumber:(number)=>{
		return new Promise((resolve, reject) => {
			Audio.Sound.createAsync(
        { uri: number.url },
        { shouldPlay: true }
			);
			resolve();
    });
	}
}
