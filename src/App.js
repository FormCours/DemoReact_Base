import { useEffect, useState } from 'react';
import './App.css';
import Calculatrice from './components/calculatrice/calculatrice-v2';
import Horloge from './components/horloge/horloge';
import MultiButton from './components/multi-button/multi-button';
import PersonTable from './components/person-table/person-table';
import Welcome from './components/welcome/welcome-v2';
import ExoAjaxWeather from './containers/exo-ajax-weather/exo-ajax-weather';
import MainHeader from './containers/main-header/main-header';

import data from './data/person.json';


function App() {

  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    console.log('Toggle');
    setDisplay(d => !d);
  }

  return (
    <>
      <MainHeader />
      <main className="App">
        <h1>Demo 01</h1>
        {/* 
        <Welcome firstname='Zaza' lastname='Vanderquack' />
        <hr />
        
        <h2>Collection</h2>
        <PersonTable people={data} />
        <hr />
        
        <h2>State</h2>
        <MultiButton />
        <hr /> 
        
        <h2>Formulaire</h2>
        <Calculatrice />

        <h2>Cycle de vie</h2>
        <button onClick={handleDisplay} >Toggle</button>
        {display && (
          <Horloge />
        )}
        */}

        <h2>Requete AJAX</h2>
        <ExoAjaxWeather />

      </main>
    </>
  );
}

export default App;
