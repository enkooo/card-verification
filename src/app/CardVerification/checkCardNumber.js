import { checkCardProvider } from './checkCardProvider';
import { isValidLuhnAlgorithm } from './isValidLuhnAlgorithm';

export const checkCardNumber = (cardNumber) => {
	const spaceDashRegex = /\s[-]/g;
	const trimmedCardNumber = cardNumber.replace(spaceDashRegex, '');

	const cardProvider = checkCardProvider(trimmedCardNumber);
	const isValid = isValidLuhnAlgorithm(trimmedCardNumber);

	return { isValid, cardProvider };
};
