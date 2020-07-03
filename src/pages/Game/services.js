// auth-service.js
export const service = {
	getNumber: (numbers, objNumbers)=>{
		return new Promise((resolve, reject) => {
			console.log("service");
			let indice = Math.floor(numbers.length * Math.random());
			console.log("service:numbers", numbers);
			console.log("service:indice", indice);
			console.log("service:obsNumber", objNumbers);
			number = objNumbers[numbers[indice]];
			console.log("service:number", number);
			resolve(number);
		});
	}
}
