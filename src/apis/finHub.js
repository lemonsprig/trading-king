import axios from 'axios';

const TOKEN = 'cf4laqaad3i7dbfhr8a0cf4laqaad3i7dbfhr8ag'

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN
  }
})
