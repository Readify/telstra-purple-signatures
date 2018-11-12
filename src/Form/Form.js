import React, { Component } from 'react';
import { omit, mapValues } from 'lodash/object';

import './Form.scss';
import { placeholders } from '../constants';
import SignatureContainer from '../SignatureContainer';

class Form extends Component {
  static labels = {
    signatureTypes: 'Signature Type',
    name: 'Your Name:',
    title: 'Job Title:',
    email: 'Email:',
    phone: 'Phone:',
    mobile: 'Mobile:',
    twitter: 'Twitter: (Optional)',
    qualifications: 'Qualifications: (Optional)'
  };

  constructor() {
    super();
    this.state = {
      isSupport: false,
      inputs: {
        signatureTypes: {
          text: [
            { text: 'Readify', checked: true },
            { text: 'Readify Support', checked: false },
            { text: 'BTS Digital', checked: false }
          ],
          order: 1
        },
        name: { text: '', order: 2 },
        title: { text: '', order: 3 },
        qualifications: { text: '', order: 4 },
        mobile: { text: '', order: 5 },
        email: { text: '', order: 6 },
        twitter: { text: '', order: 7 }
      }
    };
  }

  handleChange = (name, value) => {
    let inputs = this.state.inputs;
    const newState = {
      ...inputs,
      [name]: { text: value, order: inputs[name].order }
    };
    this.setState({ inputs: newState });
  };

  handleRadioChange = index => {
    const signatureTypes = this.state.inputs.signatureTypes;
    const newSignatureTypes = signatureTypes.text.map((sigObj, sigIndex) => ({
      ...sigObj,
      ...(sigIndex === index ? { checked: true } : { checked: false })
    }));
    const isSupport = newSignatureTypes[1].checked;
    const isBTS = newSignatureTypes[2].checked;

    const baseInputs = isBTS
      ? {
          phone: {
            text: '',
            order: 4.5
          },
          ...this.state.inputs
        }
      : omit(this.state.inputs, ['phone']);
    this.setState({
      inputs: {
        ...baseInputs,
        signatureTypes: { ...signatureTypes, text: newSignatureTypes }
      },
      isSupport: isSupport
    });
  };

  inputHtml = (inputName, inputVal) => {
    if (inputName === 'signatureTypes') {
      return (
        <div className="field is-narrow">
          <div className="control">
            {inputVal.map((inputObj, index) => {
              return (
                <label className="radio" key={index}>
                  <input
                    className="radioInput"
                    type="radio"
                    name="signatureTypeOpt"
                    onChange={() => this.handleRadioChange(index)}
                    checked={inputObj.checked}
                  />
                  {inputObj.text}
                </label>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <input
        className="input"
        placeholder={placeholders[inputName]}
        style={{ width: '300px' }}
        value={inputVal || ''}
        onChange={e => this.handleChange(inputName, e.target.value)}
      />
    );
  };

  renderHtmlForInputs = formInputs => {
    return Object.entries(formInputs)
      .sort((a, b) => a[1].order - b[1].order)
      .map(obj => ({ key: obj[0], ...omit(obj[1], 'order') }))
      .map(inputObj => {
        const inputName = inputObj.key;
        return (
          <div className="field is-horizontal" key={inputName}>
            <div className="field-label is-normal">
              <label className="label field-label">
                {Form.labels[inputName]}
              </label>
            </div>
            <div className="field-body">
              <div className="control" key={inputName}>
                {this.inputHtml(inputName, inputObj.text)}
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    const formInputs = this.state.inputs;

    const inputs = this.renderHtmlForInputs(formInputs);

    const SignatureContainerProps = {
      placeholders,
      isSupport: this.state.isSupport,
      ...omit(mapValues(this.state.inputs, 'text'), 'signatureType')
    };

    return (
      <form>
        {inputs}
        <hr />
        <SignatureContainer {...SignatureContainerProps} />
      </form>
    );
  }
}

export default Form;
