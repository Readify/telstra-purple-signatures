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
    phone: 'Phone:',
    mobile: 'Mobile:',
    twitter: 'Twitter: (Optional)',
    qualifications: 'Qualifications: (Optional)',
  };

  constructor(props) {
    super(props);
    this.state = {
      isSupport: false,
      inputs: [
        {
          signatureType: [{ text: 'Readify', checked: true }, {
            text: 'Readify Support',
            checked: false
          }, { text: 'BTS Digital', checked: false }], order: 1
        },
        { name: '', order: 2 },
        { title: '', order: 3 },
        { qualifications: '', order: 4 },
        { mobile: '', order: 5 },
        { email: '', order: 6 },
        { twitter: '', order: 7 },
      ],
    };
  }

  handleChange = stateObj => {
    this.setState({ inputs: { ...this.state.inputs, ...stateObj } });
  };

  handleRadioChange = index => {
    const newSignatureTypes = this.state.inputs.signatureType.map(
      (sigObj, sigIndex) => ({ ...sigObj, ...(sigIndex === index ? { checked: true } : { checked: false }) })
    );
    const isSupport = newSignatureTypes[1].checked;
    const isBTS = newSignatureTypes[2].checked;
    const baseInputs = isBTS ? { phone: '', ...this.state.inputs } : omit(this.state.inputs, ['phone']);
    this.setState({
      inputs: { ...baseInputs, signatureType: newSignatureTypes },
      isSupport: isSupport
    });
  };

  inputHtml = (inputName, inputVal) => {
    if (inputName === 'signatureType') {
      return <div>
        {inputVal.map(
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
                  value={inputVal || ''}
                  onChange={(e) => this.handleChange({ [inputName]: e.target.value })}/>;
  };

  renderHtmlForInputs = (formInputs) => {
    return formInputs.sort((a, b) => a.order - b.order).map(obj => omit(obj, 'order')).map(
      inputObj => {
        const inputName = Object.keys(inputObj).pop();
        return <tr key={inputName}>
          <td className="col-md-4">{Form.labels[inputName]}</td>
          <td className="col-md-4">
            {this.inputHtml(inputName, inputObj[inputName])}
          </td>
        </tr>;
      }
    );
  };

  render() {
    const formInputs = this.state.inputs;

    const inputs = this.renderHtmlForInputs(formInputs);

    const firstKey = inputObj => Object.keys(inputObj).pop();
    const firstValue = inputObj => Object.values(inputObj).pop();

    const SignatureContainerProps = {
      placeholders,
      isSupport: this.state.isSupport,
      ...formInputs
        .map(obj => omit(obj, 'order'))
        .filter(inputObj => firstKey(inputObj) !== 'signatureType')
        .reduce((result, item) => Object.assign(result, { [firstKey(item)]: firstValue(item) }), {})

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