import { ApiRequestObject } from '../../utils/httpService';
import { CountryDetailsResponse } from './types';

const REQUIRED_FIELDS = [
  'name',
  'capital',
  'region',
  'subregion',
  'currencies',
  'languages',
  'population',
  'topLevelDomain',
  'borders',
  'flags',
];

const getCountryDetailsByNameAPI: (name: string) => ApiRequestObject<object, CountryDetailsResponse> = (name) => ({
  endpoint: `name/${name}?fullText=true&fields=${REQUIRED_FIELDS.join(',')}`,
  method: 'GET',
});

const getCountryDetailsByCCN3API: (name: string) => ApiRequestObject<object, CountryDetailsResponse> = (name) => ({
  endpoint: `alpha/${name}&fields=${REQUIRED_FIELDS.join(',')}`,
  method: 'GET',
});

export { getCountryDetailsByNameAPI, getCountryDetailsByCCN3API };
