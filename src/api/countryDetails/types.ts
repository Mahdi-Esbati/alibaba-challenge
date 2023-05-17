interface CountryListItem {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  capital: string[];
  region: string;
  population: number;
}

export type CountryListResponse = CountryListItem[];
