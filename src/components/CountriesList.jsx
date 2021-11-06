import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((el) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              key={el.cca3}
              to={`/${el.cca3}`}
            >
              {el.flag} {el.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
