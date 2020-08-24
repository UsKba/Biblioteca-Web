/* eslint-disable no-undef */
const CLIENT_ID = 'RhbGlTFhHHN0c9TlqzhXHWYoK2jenc5wWK9cCyuB';
let REDIRECT_URI = 'http://localhost:3000/home';
const SUAP_URL = 'https://suap.ifrn.edu.br';

if (process.env.NODE_ENV === 'production') {
  REDIRECT_URI = 'https://mystifying-kirch-1890cf.netlify.app/home';
}

const suap = new SuapClient(SUAP_URL, CLIENT_ID, REDIRECT_URI);

export default suap;
