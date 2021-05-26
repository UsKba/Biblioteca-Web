/* eslint-disable no-undef */
const CLIENT_ID = 'fZBIVS7bwbeHlHa6HK9nQR3j2sELX5kiCGK9JHgZ';
let REDIRECT_URI = 'http://localhost:3000/';
const SUAP_URL = 'https://suap.ifrn.edu.br';

if (process.env.NODE_ENV === 'production') {
  REDIRECT_URI = 'https://smartlibrary.netlify.app/';
}

const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI);

export default suap;
