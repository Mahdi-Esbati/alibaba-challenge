import type React from 'react';
import Styles from './country-list-item.module.css';
import { Link } from 'react-router-dom';
import classNames from '../../../../utils/classNames';

interface Props {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const CountryListItem: React.FC<Props> = ({ flag, name, population, region, capital }) => {
  const renderListItem = (title: string, value: string) => (
    <div>
      <span className="text-body-bold">{title}</span>
      <span className="text-body">{value}</span>
    </div>
  );

  return (
    <Link className={classNames('d-flex flex-column shadow-main', Styles.CountryListItem)} to={`/details/${name}`}>
      <img src={flag} alt={`Flag of ${name}`} />
      <div className={Styles.CountryListItem__content}>
        <h2 className="">{name}</h2>
        {renderListItem('Population: ', population)}
        {renderListItem('Region: ', region)}
        {renderListItem('Capital: ', capital)}
      </div>
    </Link>
  );
};

export default CountryListItem;
