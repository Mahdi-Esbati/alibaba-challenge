interface CountryDetails {
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
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
  };
  borders: string[];
  population: number;
}

export type CountryDetailsResponse = [CountryDetails];
