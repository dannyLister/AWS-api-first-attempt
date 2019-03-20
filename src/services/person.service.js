import axios from 'axios';

export const getPeople = async () => {
  const url = `https://u807vstsr9.execute-api.eu-west-2.amazonaws.com/dev/people/all`;
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.Items;
  } catch (err) {
    console.log(err)
    throw new Error(err);
  }
};

export const getPerson = (id) => {

};

export const createPerson = (person) => {

};

export const updatePerson = (person) => {

};