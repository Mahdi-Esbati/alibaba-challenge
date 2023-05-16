import MainLayout from '../../components/layouts/MainLayout';
import CountryListItem from './components/CountryListItem';
import Styles from './country-list.module.css';

const CountryList = () => {
  return (
    <MainLayout>
      <div className="d-flex flex-column">
        <section className="d-flex jc-between">
          <input type="text" />
          <select>
            <option value="folan">Item1</option>
            <option value="bisar">Item2</option>
          </select>
        </section>

        <section className={Styles.CountryList}>
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
    </MainLayout>
  );
};

export default CountryList;
