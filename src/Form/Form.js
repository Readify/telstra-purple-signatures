import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { omit, mapValues } from 'lodash/object';
import { camelCase } from 'lodash/string';
import fetchProfile from '../AAD/getUserProfile';
import './Form.scss';

import constants from '../constants';
import SignatureContainer from '../SignatureContainer';

export class Form extends Component {
  static labels = {
    signatureTypes: { label: 'Signature Type', type: 'radio' },
    name: { label: 'Your Name', required: true },
    pronoun: { label: 'Your Pronouns', required: true },
    title: { label: 'Job Title or Team' },
    email: { label: 'Email', type: 'email', required: true },
    phone: { label: 'Phone', type: 'tel' },
    mobile: { label: 'Mobile', type: 'tel', required: true },
    twitter: { label: 'Twitter' },
    qualifications: { label: 'Qualifications' },
    supportHotline: { label: 'Support Hotline', type: 'tel', required: true },
    supportEmail: { label: 'Support Email', type: 'email', required: true }
  };

  constructor(props) {
    super(props);

    this.state = {
      sigType: false,
      inputs: {
        signatureTypes: {
          text: [
            { text: 'Telstra Purple', checked: true, type: 'purple' },
            {
              text: 'Telstra Purple Managed Services',
              checked: false,
              type: 'support'
            },
            {
              text: 'Telstra Purple EMEA',
              checked: false,
              type: 'EMEA'
            }
          ].filter(Boolean),
          order: 1
        },
        name: { text: '', order: 2 },
        pronoun: { text: '', order: 3},
        title: { text: '', order: 4 },
        qualifications: { text: '', order: 5 },
        mobile: { text: '', order: 6 },
        email: { text: '', order: 7 },
        twitter: { text: '', order: 8 }
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.accessToken && !this.props.profile) {
      this.props.fetchProfile(this.props.accessToken.accessToken);
    }

    if (this.props.profile && this.props.profile !== prevProps.profile) {
      this.setState({
        ...this.state,
        inputs: {
          ...this.state.inputs,
          name: { text: this.props.profile.displayName, order: 2 },
          pronoun: { text: this.props.profile.pronoun, order: 3 },
          title: { text: this.props.profile.jobTitle, order: 4 },
          qualifications: { text: '', order: 5 },
          mobile: { text: this.props.profile.mobilePhone, order: 6 },
          email: { text: this.props.profile.mail, order: 7 }
        }
      });
    }
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
    const sigType = newSignatureTypes[index].type;

    const baseInputs =
      sigType === 'support'
        ? {
            supportHotline: { text: '', order: 8 },
            supportEmail: { text: '', order: 8 },
            ...this.state.inputs
          }
        : omit(this.state.inputs, ['supportHotline', 'supportEmail']);
    this.setState({
      inputs: {
        ...baseInputs,
        signatureTypes: { ...signatureTypes, text: newSignatureTypes }
      },
      sigType: sigType
    });
  };

  inputHtml = (inputName, inputVal, placeholders, type = 'text') => {
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
                    id={camelCase(inputObj.text)}
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
        id={`input-${inputName}`}
        className="input"
        type={type}
        placeholder={placeholders[inputName]}
        style={{ width: '300px' }}
        value={inputVal || ''}
        onChange={e => this.handleChange(inputName, e.target.value)}
      />
    );
  };

  renderHtmlForInputs = (formInputs, placeholders) => {
    return Object.entries(formInputs)
      .sort((a, b) => a[1].order - b[1].order)
      .map(obj => ({ key: obj[0], ...omit(obj[1], 'order') }))
      .map(inputObj => {
        const inputName = inputObj.key;
        const { label, type = 'text', required = false } = Form.labels[
          inputName
        ];
        return (
          <div className="field is-horizontal" key={inputName}>
            <div className="field-label is-normal">
              <label className="label field-label" for={`input-${inputName}`}>
                {label}
                {required ? (
                  <span title="Required" style={{ color: 'red' }}>
                    *
                  </span>
                ) : null}
              </label>
            </div>
            <div className="field-body">
              <div className="control" key={inputName}>
                {this.inputHtml(inputName, inputObj.text, placeholders, type)}
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    const placeholders = constants.purple.placeholders;
    const formInputs = this.state.inputs;
    const inputs = this.renderHtmlForInputs(formInputs, placeholders);

    const EMEAInfo =
      this.state.sigType === 'EMEA' ? constants.purple.EMEAInfo : undefined;

    const SignatureContainerProps = {
      placeholders,
      sigType: this.state.sigType,
      ...omit(mapValues(this.state.inputs, 'text'), 'signatureType'),
      ...EMEAInfo
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

const mapStateToProps = state => ({
  profile: state.profile,
  accessToken: state.accessToken
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProfile: fetchProfile
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Form);
