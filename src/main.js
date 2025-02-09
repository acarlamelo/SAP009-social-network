import './lib/firebase.js';
import './lib/login-firebase.js';
import './lib/firebase-cad.js';

import { login } from './pages/login/login.js';
import { cadastro } from './pages/cadastro/cad.js';
import { timeline } from './pages/timeLine/time.js';

const main = document.getElementById('root');
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.replaceChildren(login());
        break;
      case '#cadastro':
        main.replaceChildren(cadastro());
        break;
      case '#timeline':
        main.replaceChildren(timeline());
        break;
      default:
        main.replaceChildren(login());
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(login());
  init();
});
