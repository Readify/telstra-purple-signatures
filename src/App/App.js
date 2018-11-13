import React from 'react';
import './App.css';

import Form from '../Form';
import Header from '../Header';
import Info from '../Info';

const App = () => (
  <div>
    <Header
      brandInfo={{
        appName: 'Readify Outlook Signature',
        brandLink: 'https://readify-signatures.azurewebsites.net/'
      }}
    />
    <section className="section">
      <div className="columns">
        <div className="column" />
        <div className="column is-three-quarters">
          <div className="container">
            <Info />
            <Form />
          </div>
        </div>
        <div className="column" />
      </div>
    </section>
  </div>
);

export default App;
