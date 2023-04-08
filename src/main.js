import './style.css';
import { checkCardNumber } from './app/CardVerification';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Card verification</h1>
  </div>
`;

console.log(checkCardNumber('5193080150954111'));
