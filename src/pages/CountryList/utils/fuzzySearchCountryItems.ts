import type { CountryListItem } from '../../../api/countryList/types';

const worker = new Worker(new URL('../../../utils/fuzzyStringSearch.ts', import.meta.url), { type: 'module' });

// Function to perform fuzzy string search using web worker
function fuzzyStringSearch(searchString: string, array: string[]): Promise<string[]> {
  return new Promise((resolve) => {
    // Event listener for receiving messages from the web worker
    worker.addEventListener('message', (event) => {
      const searchResults = event.data;
      resolve(searchResults);
    });

    // Send the search parameters to the web worker
    worker.postMessage({ searchString, array });
  });
}

async function fuzzySearchCountryItems(
  searchString: string,
  countryObjects: CountryListItem[]
): Promise<CountryListItem[]> {
  const officialNames = countryObjects.map((countryObject) => countryObject.name.common);

  const searchResults = await fuzzyStringSearch(searchString, officialNames);

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
