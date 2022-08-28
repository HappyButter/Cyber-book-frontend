import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cyber-shop-spring-graphql.herokuapp.com'
});

export default instance;