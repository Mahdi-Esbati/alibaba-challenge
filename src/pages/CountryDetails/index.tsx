import { Link, useParams } from 'react-router-dom';
import Styles from './country-details.module.css';
import classNames from '../../utils/classNames';
import Button from '../../components/uikit/Button';
import useAPI from '../../hooks/useAPI';
import { getCountryDetailsByNameAPI } from '../../api/countryDetails';
import { useMemo } from 'react';

const CountryDetails = () => {
  const { countryName } = useParams();
  const { data } = useAPI({ apiRequestObject: getCountryDetailsByNameAPI(countryName || ''), fetchOnMount: true });
  const targetCountry = useMemo(() => data?.[0], [data]);

  const renderDetailItem = (title: string, value: string) => (
    <div>
      <span className="text-body-bold">{title}: </span>
      <span className="text-body">{value}</span>
    </div>
  );

  if (!targetCountry) return;

  return (
    <main className={Styles.CountryDetails}>
      <div className={classNames('d-flex', Styles.CountryDetails__actionRow)}>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>

      <div className={classNames(Styles.CountryDetails__content)}>
        <img className="w-100" src={targetCountry.flags.svg} alt={targetCountry.flags.alt} />
        <section>
          <h2 className={Styles.CountryDetails__content__title}>{targetCountry.name.common}</h2>

          <div className={Styles.CountryDetails__content__itemList}>
            {renderDetailItem('Native Name', Object.values(targetCountry.name.nativeName || {})[0].common)}
            {renderDetailItem('Population', targetCountry.population.toString())}
            {renderDetailItem('Region', targetCountry.region.toString())}
            {renderDetailItem('Sub Region', targetCountry.subregion.toString())}
            {renderDetailItem('Capital', targetCountry.capital.toString())}
            {renderDetailItem('Top Level Domain', targetCountry.population.toString())}
            {renderDetailItem(
              'Currencies',
              Object.values(targetCountry.currencies)
                .map((currency) => currency.name)
                .toString()
            )}
            {renderDetailItem('Languages', Object.values(targetCountry.languages).toString())}
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
