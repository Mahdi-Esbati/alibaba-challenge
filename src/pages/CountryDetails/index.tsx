import { Link } from 'react-router-dom';
import Styles from './country-details.module.css';
import classNames from '../../utils/classNames';
import Button from '../../components/uikit/Button';

const CountryDetails = () => {
  const renderDetailItem = (title: string, value: string) => (
    <div>
      <span className="text-body-bold">{title}: </span>
      <span className="text-body">{value}</span>
    </div>
  );

  return (
    <main>
      <div className={classNames('d-flex', Styles.CountryDetails__actionRow)}>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>

      <div className={classNames('d-flex', Styles.CountryDetails__content)}>
        <img className="grow-1" src="https://flagcdn.com/w320/us.png" alt="" />
        <section className="grow-1">
          <h2 className={Styles.CountryDetails__content__title}>Belgium</h2>

          <div className={Styles.CountryDetails__content__itemList}>
            {renderDetailItem('Native Name', 'Belgie')}
            {renderDetailItem('Native Name', 'Belgie')}
            {renderDetailItem('Native Name', 'Belgie')}
            {renderDetailItem('Native Name', 'Belgie')}
            {renderDetailItem('Native Name', 'Belgie')}
            {renderDetailItem('Native Name', 'Belgie')}
          </div>

          <div className={Styles.CountryDetails__content__borderCountries}>
            <span className="text-body-bold">Border Countries: </span>
            <span>France</span>
            <span>Germany</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CountryDetails;
