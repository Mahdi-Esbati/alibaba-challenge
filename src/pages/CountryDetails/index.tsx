import { Link } from 'react-router-dom';

const CountryDetails = () => {
  const renderDetailItem = (title: string, value: string) => (
    <div>
      <span className="text-body-bold">{title}: </span>
      <span className="text-body">{value}</span>
    </div>
  );

  return (
    <main>
      <div>
        <Link to="/">Back</Link>

        <div>
          <img src="" alt="" />
          <section>
            <h2>Belgium</h2>

            <div>
              {renderDetailItem('Native Name', 'Belgie')}
              {renderDetailItem('Native Name', 'Belgie')}
              {renderDetailItem('Native Name', 'Belgie')}
              {renderDetailItem('Native Name', 'Belgie')}
              {renderDetailItem('Native Name', 'Belgie')}
              {renderDetailItem('Native Name', 'Belgie')}
            </div>

            <div>
              <span className="text-body-bold">Border Countries:</span>
              <span>France</span>
              <span>Germany</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
