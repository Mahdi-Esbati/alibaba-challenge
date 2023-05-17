import countryListAPI from '../../api/countryList';
import Input from '../../components/uikit/Input';
import Select from '../../components/uikit/Select';
import useAPI from '../../hooks/useAPI';
import classNames from '../../utils/classNames';
import CountryListItem from './components/CountryListItem';
import Styles from './country-list.module.css';

const CountryList = () => {
  const { data } = useAPI({ apiRequestObject: countryListAPI, fetchOnMount: true });

  return (
    <div className={classNames('d-flex flex-column ai-center', Styles.CountryList__container)}>
      <section className={classNames('d-flex jc-between w-100', Styles.CountryList__form)}>
        <Input placeholder="Search for a country" />
        <Select>
          <option value="folan">Item1</option>
          <option value="bisar">Item2</option>
        </Select>
      </section>

      <section className={Styles.CountryList__list}>
        {data &&
          data.map((item) => (
            <CountryListItem
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
