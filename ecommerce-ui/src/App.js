import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import data from './_data/airbnbs.json';
import Hero from './components/Hero/';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Available Destinations' data={data}/>
    </Router>
  );
}

export default App;
