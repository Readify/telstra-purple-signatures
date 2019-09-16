import React from 'react';
import './App.css';

import Form from '../Form';
import Header from '../Header';
import Info from '../Info';

const App = () => (
  <div>
    <Header
      brandInfo={{
        appName: 'Outlook Signature',
        brandLink: 'https://signatures.purple.tech/'
      }}
    />
    <section className="section">
      <div className="container">
        <Info />
        <Form />
      </div>
    </section>
  </div>
);

export default App;
