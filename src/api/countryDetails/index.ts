import { ApiRequestObject } from '../../utils/httpService';
import { CountryListResponse } from './types';

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

const countryDetailsAPI: (name: string) => ApiRequestObject<object, CountryListResponse> = (name) => ({
  endpoint: `name/${name}?fullText=true&fields=${REQUIRED_FIELDS.join(',')}`,
  method: 'GET',
});

export default countryDetailsAPI;
