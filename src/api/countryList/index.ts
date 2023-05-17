import { ApiRequestObject } from '../../utils/httpService';
import { CountryListResponse } from './types';

const REQUIRED_FIELDS = ['name', 'capital', 'region', 'population', 'flags'];

const countryListAPI: ApiRequestObject<object, CountryListResponse> = {
  endpoint: `all?fields=${REQUIRED_FIELDS.join(',')}`,
  method: 'GET',
};

export default countryListAPI;
