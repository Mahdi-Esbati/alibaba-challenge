import classNames from '../../utils/classNames';
import CountryListItem from './components/CountryListItem';
import Styles from './country-list.module.css';

const CountryList = () => {
  return (
    <div className={classNames('d-flex flex-column', Styles.CountryList__container)}>
      <section className={classNames('d-flex jc-between', Styles.CountryList__form)}>
        <input type="text" />
        <select>
          <option value="folan">Item1</option>
          <option value="bisar">Item2</option>
        </select>
      </section>

      <section className={Styles.CountryList__list}>
        {Array.from({ length: 10 }).map(() => (
          <CountryListItem
            flag="https://flagcdn.com/w320/us.png"
            name="United States"
            region="America"
            population="400,000,000"
            capital="Washington"
          />
        ))}
      </section>
    </div>
  );
};

export default CountryList;
