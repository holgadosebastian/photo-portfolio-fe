import React, { Fragment } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

import './tailwind.output.css';
import Home from './pages/home'
import SinglePicture from './pages/singlePicture'
import SingleTag from './pages/singleTag'
import AllTags from './pages/allTags'
import NavBar from './layout/navBar'


function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/picture/:id' component={SinglePicture} />
        <Route exact path='/tag/:id' component={SingleTag} />
        <Route exact path='/all-tags' component={AllTags} />
      </Switch>
    </Fragment>
    
  );
}

export default App;
