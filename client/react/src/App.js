import React from 'react'
import './App.css';
import Home from '../src/pages/Home'
import "./style/blog-css.css"
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Switch>
            <Route exact path='/' component={() => <Home/>} />
        <Route path='/' component={() => <h1>Page not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
