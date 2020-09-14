/* eslint-disable no-undef */
const CLIENT_ID = 'JG6kaW85DTYzWOEVW4CXpFSqwGBdGEUXn0oNcLzE';
let REDIRECT_URI = 'http://localhost:3000/';
const SUAP_URL = 'https://suap.ifrn.edu.br';

if (process.env.NODE_ENV === 'production') {
  REDIRECT_URI = 'https://mystifying-kirch-1890cf.netlify.app/';
}

const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI);

export default suap;
