import { Component } from 'react';
import Form from './Form';
import Header from './Header';
import Info from './Info';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          brandInfo={{
            appName: 'Signature Generator',
            brandLink: 'https://makerx.com.au',
          }}
        ></Header>
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
