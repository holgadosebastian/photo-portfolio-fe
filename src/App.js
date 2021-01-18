import React, { Fragment } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

import './tailwind.output.css';
import Home from './pages/home'
import SinglePicture from './pages/singlePicture'
import SingleTag from './pages/singleTag'
import SingleCollection from './pages/singleCollection'
import SingleCountry from './pages/singleCountry'
import AllTags from './pages/allTags'
import AllCollections from './pages/allCollections'
import AllCountries from './pages/allCountries'
import Styleguide from './pages/styleguide'
import NavBar from './layout/navBar'


function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/picture/:id' component={SinglePicture} />
        <Route exact path='/tag/:id' component={SingleTag} />
        <Route exact path='/collection/:id' component={SingleCollection} />
        <Route exact path='/country/:id' component={SingleCountry} />
        <Route exact path='/all-tags' component={AllTags} />
        <Route exact path='/all-collections' component={AllCollections} />
        <Route exact path='/all-countries' component={AllCountries} />
        <Route exact path='/styleguide' component={Styleguide} />
      </Switch>
    </Fragment>
    
  );
}

export default App;
