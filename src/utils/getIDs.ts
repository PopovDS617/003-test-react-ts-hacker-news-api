import axios from 'axios';
import { GET_NEW_POSTS } from '../constants/fetch-data';

export const getIDs = async () => {
  const response = await axios({
    method: 'GET',
    url: GET_NEW_POSTS
  });

  const { data } = response;

  return data;
};
