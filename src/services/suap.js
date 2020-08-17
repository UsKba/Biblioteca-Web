/* eslint-disable no-undef */
const CLIENT_ID = 'BFQAvAsreihZpPRaHshKwcGMFNxzJgx9fJuzkth8';
const REDIRECT_URI = 'http://localhost:3000/login';
const SUAP_URL = 'https://suap.ifrn.edu.br';

const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI);

export default suap;
