export const isValidLuhnAlgorithm = (cardNumber) => {
	const cardNumbers = cardNumber.split('').map((number) => parseInt(number));
	const numbersToValidate = [];
	const othersNumbers = [];

	cardNumbers.reverse().forEach((number, index) => {
		if (index === 0 || index % 2 === 0) {
			othersNumbers.push(number);
		} else {
			numbersToValidate.push(number * 2);
		}
	});

	const splittedNumbers = numbersToValidate
		.map((number) => {
			if (number > 9) {
				return [
					...number
						.toString()
						.split('')
						.map((number) => parseInt(number)),
				];
			}

			return number;
		})
		.flat(Infinity);

	const sumSplittedNumbers = splittedNumbers.reduce((total, number) => total + number, 0);
	const sumOthersNumbers = othersNumbers.reduce((total, number) => total + number, 0);

	return (sumSplittedNumbers + sumOthersNumbers) % 10 === 0;
};
