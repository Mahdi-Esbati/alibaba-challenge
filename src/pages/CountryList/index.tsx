import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getCountryListAPI } from '../../api/countryList';
import Input from '../../components/uikit/Input';
import Select from '../../components/uikit/Select';
import useAPI from '../../hooks/useAPI';
import classNames from '../../utils/classNames';
import CountryListItem from './components/CountryListItem';
import Styles from './country-list.module.css';
import useInputValue from '../../hooks/useInputValue';
import { useMemo } from 'react';
import fuzzySearchCountryItems from './utils/fuzzySearchCountryItems';

const CountryList = () => {
  const { ref: searchRef, value: searchValue } = useInputValue();
  const { data } = useAPI({ apiRequestObject: getCountryListAPI, fetchOnMount: true });
  const filteredCountries = useMemo(() => fuzzySearchCountryItems(searchValue, data || []), [data, searchValue]);

  return (
    <div className={classNames('d-flex flex-column ai-center', Styles.CountryList__container)}>
      <section className={classNames('d-flex jc-between w-100', Styles.CountryList__form)}>
        <Input ref={searchRef} icon={faMagnifyingGlass} placeholder="Search for a country..." />
        <Select>
          <option value="folan">Item1</option>
          <option value="bisar">Item2</option>
        </Select>
      </section>

      <section className={Styles.CountryList__list}>
        {filteredCountries &&
          filteredCountries.map((item) => (
            <CountryListItem
              key={JSON.stringify(item.name)}
              flag={item.flags.png}
              name={item.name.common}
              region={item.region}
              population={item.population.toString()}
              capital={item.capital[0]}
            />
          ))}
      </section>
    </div>
  );
};

export default CountryList;
