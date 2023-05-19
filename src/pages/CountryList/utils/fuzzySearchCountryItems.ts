import type { CountryListItem } from '../../../api/countryList/types';
import fuzzyStringSearch from '../../../utils/fuzzyStringSearch';

function fuzzySearchCountryItems(searchString: string, countryObjects: CountryListItem[]): CountryListItem[] {
  const officialNames = countryObjects.map((countryObject) => countryObject.name.common);

  const searchResults = fuzzyStringSearch(searchString, officialNames);

  const filteredCountryObjects: CountryListItem[] = [];

  for (const searchResult of searchResults) {
    const matchingCountryObject = countryObjects.find((countryObject) => countryObject.name.common === searchResult);
    if (matchingCountryObject) {
      filteredCountryObjects.push(matchingCountryObject);
    }
  }

  return filteredCountryObjects;
}

export default fuzzySearchCountryItems;
