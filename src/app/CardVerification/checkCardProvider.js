export const checkCardProvider = (cardNumber) => {
	const cardProviders = [
		{
			name: 'mastercard',
			regex: /^5[1-5][0-9]{14}$/,
		},
		{
			name: 'visa',
			regex: /^4[0-9]{12}(?:[0-9]{3})?$/,
		},
		{
			name: 'american-express',
			regex: /^3[47][0-9]{13}$/,
		},
	];

	const cardProvider = cardProviders.find((cardProvider) => {
		return cardProvider.regex.test(cardNumber);
	});

	if (cardProvider) {
		return cardProvider.name;
	}

	return 'unknown';
};
