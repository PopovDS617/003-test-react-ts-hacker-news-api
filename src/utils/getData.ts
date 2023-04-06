import axios from 'axios';
import { BASE_URL } from '../constants/fetch-data';

export const getData = async (id: number) => {
  const url = BASE_URL + 'item/' + id + '.json';

  const response = await axios({
    method: 'GET',
    url: url
  });

  const { data } = response;

  return data;
};
