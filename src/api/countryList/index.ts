import { ApiRequestObject } from '../../utils/httpService';
import { CountryListResponse } from './types';

const REQUIRED_FIELDS = ['name', 'capital', 'region', 'population', 'flags'];

const getCountryListAPI: ApiRequestObject<object, CountryListResponse> = {
  endpoint: `all?fields=${REQUIRED_FIELDS.join(',')}`,
  method: 'GET',
};

export { getCountryListAPI };
