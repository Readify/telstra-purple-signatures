import React from 'react';
import './App.css';

import Form from '../Form';
import Header from '../Header';
import Info from '../Info';

const App = () => (
  <div>
    <Header brandInfo={
      {
        appName: 'Readify Outlook Signature',
        brandLink: 'https://readify-signatures.azurewebsites.net/'
      }
    }/>
    <div>
      <div className="col-md-1"/>
      <div className="col-md-10" style={{ paddingBottom: '4rem' }}>
        <Info/>
        <Form/>
      </div>
      <div className="col-md-1"/>
    </div>
  </div>
);

export default App;