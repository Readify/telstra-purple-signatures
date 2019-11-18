import React, { Component } from 'react';
import './App.css';

import Form from '../Form';
import Header from '../Header';
import Info from '../Info';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountInfo: null
    };
  }

  render() {
    return (
      <div className={this.props.isEmbedded ? "embedded" : undefined}>
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
  }
}

export default App;
