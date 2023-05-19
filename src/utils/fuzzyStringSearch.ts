function fuzzyStringSearch(searchString: string, array: string[]): string[] {
  if (!searchString.trim()) return array;
  const results: string[] = [];

  const lowerSearchString = searchString.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    const currentString = array[i];
    const lowerCurrentString = currentString.toLowerCase();

    if (lowerCurrentString === lowerSearchString) {
      results.unshift(currentString); // Add exact matches to the beginning of the results array
    } else if (lowerCurrentString.includes(lowerSearchString)) {
      results.push(currentString); // Add partial matches to the end of the results array
    } else if (isFuzzyMatch(lowerCurrentString, lowerSearchString)) {
      results.push(currentString); // Add fuzzy matches to the end of the results array
    }
  }

  return results;
}

function isFuzzyMatch(lowerCurrentString: string, lowerSearchString: string): boolean {
  let searchIndex = 0;
  for (let i = 0; i < lowerCurrentString.length; i++) {
    if (searchIndex < lowerSearchString.length && lowerCurrentString[i] === lowerSearchString[searchIndex]) {
      searchIndex++;
    }
  }
  return searchIndex === lowerSearchString.length;
}

export default fuzzyStringSearch;
