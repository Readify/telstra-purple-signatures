import React, { Component } from 'react';
import { omit } from 'lodash/object';

import { placeholders } from '../constants';
import SignatureContainer from '../SignatureContainer';

class Form extends Component {
  static labels = {
    signatureType: 'Signature Type',
    name: 'Your Name:',
    title: 'Job Title:',
    email: 'Email:',
    mobile: 'Mobile:',
    twitter: 'Twitter: (Optional)',
    qualifications: 'Qualifications: (Optional)',
  };

  constructor(props) {
    super(props);
    this.state = {
      isSupport: false,
      inputs: {
        signatureType: [{ text: 'Readify', checked: true }, {
          text: 'Readify Support',
          checked: false
        }, { text: 'BTS Digital', checked: false }],
        name: '',
        title: '',
        qualifications: '',
        mobile: '',
        email: '',
        twitter: '',
      },
    };
  }

  handleChange = stateObj => {
    this.setState({ inputs: { ...this.state.inputs, ...stateObj } });
  };

  handleRadioChange = index => {
    const newSignatureTypes = this.state.inputs.signatureType.map(
      (sigObj, sigIndex) => ({ ...sigObj, ...(sigIndex === index ? { checked: true } : { checked: false }) })
    );
    this.setState({
      inputs: { ...this.state.inputs, signatureType: newSignatureTypes },
      isSupport: newSignatureTypes[1].checked
    });
  };

  inputHtml = (inputName, formInputs) => {
    if (inputName === 'signatureType') {
      return <div>
        {formInputs[inputName].map(
          (inputObj, index) => {
            return <div className="radio-inline" key={index}>
              <label>
                <input
                  type="radio"
                  name="signatureTypeOpt"
                  onChange={() => this.handleRadioChange(index)}
                  checked={inputObj.checked}/>
                {inputObj.text}
              </label>
            </div>;
          }
        )}
      </div>;
    }

    return <input className='form-control'
                  placeholder={placeholders[inputName]}
                  style={{ width: '300px' }}
                  value={formInputs[inputName] || ''}
                  onChange={(e) => this.handleChange({ [inputName]: e.target.value })}/>;
  };

  renderHtmlForInputs = (formInputs) => {
    return Object.keys(formInputs).map(
      inputName => (<tr key={inputName}>
        <td className="col-md-4">{Form.labels[inputName]}</td>
        <td className="col-md-4">
          {this.inputHtml(inputName, formInputs)}
        </td>
      </tr>)
    );
  };

  render() {
    const formInputs = this.state.inputs;

    const inputs = this.renderHtmlForInputs(formInputs);

    const SignatureContainerProps = {
      placeholders,
      isSupport: this.state.isSupport,
      ...omit(formInputs, ['signatureType'])
    };

    return (<form>
      <div className="form-group">
        <div className="col-md-10">
          <table className="table table-striped">
            <tbody>{inputs}</tbody>
          </table>
          <hr/>
          <SignatureContainer {...SignatureContainerProps} />
        </div>
        <div className="col-md-4"/>
      </div>
    </form>);
  }
}

export default Form;