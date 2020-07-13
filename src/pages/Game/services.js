// auth-service.js
export const service = {
	getNumber: (numbers, objNumbers)=>{
		return new Promise((resolve, reject) => {
			let indice = Math.floor(numbers.length * Math.random());
			number = objNumbers[numbers[indice]];
			resolve(number);
		});
	}
}
