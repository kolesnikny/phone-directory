//https://randomuser.me/api/?results
import queryString from 'query-string';
import config from '../config';

export const getPhones = (options) => {
  const defaultOptions = {
    //page: 1,
    results: 300,
    nat: [
      'AU',
      'BR',
      'CA',
      'CH',
      'DE',
      'DK',
      'ES',
      'FI',
      'FR',
      'GB',
      'IE',
      'IR',
      'NO',
      'NL',
      'NZ',
      'TR',
      'US',
    ],
    //format: 'json',
    seed: config.API_KEY,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions);

  return fetch(`${config.BASE_URL}?${query}`)
    .then((res) => res.json())
    .then((data) => data.results);
};
