import type React from 'react';
import Styles from './country-list-item.module.css';

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
    <div className={'d-flex flex-column ' + Styles.CountryListItem}>
      <img src={flag} alt={`Flag of ${name}`} />
      <div className={Styles.CountryListItem__content}>
        <h2 className="">{name}</h2>
        {renderListItem('Population: ', population)}
        {renderListItem('Region: ', region)}
        {renderListItem('Capital: ', capital)}
      </div>
    </div>
  );
};

export default CountryListItem;
