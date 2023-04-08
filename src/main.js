import './style.css';
import { checkCardNumber } from './app/CardVerification';
import chip from './app/assets/icons8-chip-card-100.png';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Card verification</h1>
    <div>
      <div class='card'>
        <div class='card__chip'>
          <img src='${chip}' alt='chip' />
        </div>
        <div class='card__number'>
          <input
            type="number"
            name="card-number"
            id="card-number"
            placeholder="Your card number"
          />
        </div>
        <div class='card__info'>
          <div class='card__info__name'>
            <span>Card holder</span>
            <p>John Doe</p>
          </div>
          <div class='card__info__date'>
            <span>Expires</span>
            <p>MM/YY</p>
          </div>
        </div>
      </div>
    </div>
    <button class='btn'>Verify</button>
    <div class='result-wrapper'>
      <span class='result'></span>
    </div>
  </div>
`;

const btn = document.querySelector('.btn');
const input = document.querySelector('#card-number');

btn.addEventListener('click', () => {
	const cardNumber = input.value;
	if (cardNumber.length === 0) return;

	const result = document.querySelector('.result');
	const { isValid, cardProvider } = checkCardNumber(cardNumber);

	result.innerHTML = `Your card provider is ${cardProvider} <br> and card number is ${isValid ? 'valid' : 'invalid'}`;
});
