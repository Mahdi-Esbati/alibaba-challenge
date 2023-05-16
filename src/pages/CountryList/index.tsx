import MainLayout from '../../components/layouts/MainLayout';
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
          <div>country1</div>
          <div>country2</div>
          <div>country3</div>
          <div>country4</div>
          <div>country5</div>
          <div>country6</div>
        </section>
      </div>
    </MainLayout>
  );
};

export default CountryList;
