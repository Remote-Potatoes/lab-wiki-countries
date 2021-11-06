import { Route, Routes } from 'react-router';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path="/:countryCca3" element={<CountryDetails />} />
          </Routes>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /App */}
    </div>
  );
}

export default App;
