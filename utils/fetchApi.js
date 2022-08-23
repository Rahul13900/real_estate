import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidAPI-key': '5deb7538demsha7f151730226e38p14874djsn532d7d1acd27'
    },
  });
    
  return data;
}