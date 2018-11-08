import React, { Component } from 'react';

import {placeholders} from '../constants';
import SignatureContainer from '../SignatureContainer';

class Form extends Component {
  static labels = {
    name: 'Your Name:',
    title: 'Job Title:',
    email: 'Email:',
    mobile: 'Mobile:',
    twitter: 'Twitter: (Optional)',
    qualifications: 'Qualifications: (Optional)',
    isSupport: 'Are you Readify Support?'
  };

  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        name: '',
        title: '',
        qualifications: '',
        mobile: '',
        email: '',
        twitter: '',
        isSupport: false,
      },
    };
  }

  handleChange = (stateObj) => {
    this.setState({ inputs: { ...this.state.inputs, ...stateObj } });
  };

  renderHtmlForInputs = (formInputs) => {
    return Object.keys(formInputs).map(
      inputName => (<tr key={inputName}>
        <td className="col-md-4">{Form.labels[inputName]}</td>
        <td className="col-md-4">
          <input {...(inputName === 'isSupport' ? {} : { className: 'form-control' })}
                 placeholder={placeholders[inputName]}
                 style={{ width: '300px' }}
                 value={formInputs[inputName] || ''}
                 {...(inputName === 'isSupport' ? { type: 'checkbox' } : {})}
                 onChange={(e) => this.handleChange({ [inputName]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })}/>
        </td>
      </tr>)
    );
  };

  render() {
    const formInputs = this.state.inputs;

    const inputs = this.renderHtmlForInputs(formInputs);

    return (<form>
      <div className="form-group">
        <div className="col-md-10">
          <table className="table table-striped">
            <tbody>
            {inputs}
            </tbody>
          </table>
          <hr/>
          <SignatureContainer
            {...formInputs}
            placeholders={placeholders}
          />
        </div>
        <div className="col-md-4"/>
      </div>
    </form>);
  }
}

export default Form;