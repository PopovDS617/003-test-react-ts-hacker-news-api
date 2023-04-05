import axios from 'axios';
import { BASE_URL } from '../constants/fetch-data';

export const getPostData = async (id: number) => {
  const url = BASE_URL + 'item/' + id + '.json';

  const response = await axios({
    method: 'GET',
    url: url
  });

  const { data } = response;

  return data;

  //     const requests = IDList.map(id => {
  //       return fetch(BASE_URL + 'item/' + id + '.json');
  //     });

  //     const responses = await Promise.all(requests);

  //     const json = responses.map(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     });

  //     const data = await Promise.all(json);
  //   } catch (error: unknown) {
  //     console.log(error);
  //   }
};
