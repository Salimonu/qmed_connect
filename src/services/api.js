import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.vtpass.com/api/',
  headers: {
    'api-key': '0ff9a8ffd7fdd456321592b1726fa681',
    'public-key': 'PK_813d4802bfc1fad07a220f83e3d5a8d42933f7256ed',
    'secret-key': 'SK_262745902414ff1b77264916de13009da15743cbb7d',
    'Content-Type': 'application/json',
  },
});

export default api;
