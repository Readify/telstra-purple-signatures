import React from 'react';
import { omit } from 'lodash/object';
import './Form.scss';

import SignatureContainer from '../SignatureContainer';

import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../slice';

import constants from '../constants';

export const Form = () => {
  const dispatch = useDispatch();

  const placeholders = constants.placeholders;

  const labels = {
    name: { label: 'Your Name', required: true },
    pronoun: { label: 'Your Pronouns' },
    title: { label: 'Job Title' },
    email: { label: 'Email', type: 'email', required: true },
    phone: { label: 'Phone', type: 'tel' },
    mobile: { label: 'Mobile', type: 'tel', required: true },
    twitter: { label: 'Twitter' },
    qualifications: { label: 'Qualifications' },
  };

  let formInputs = {
    name: { text: '', order: 2 },
    pronoun: { text: '', order: 3 },
    title: { text: '', order: 4 },
    qualifications: { text: '', order: 5 },
    mobile: { text: '', order: 6 },
    email: { text: '', order: 7 },
    twitter: { text: '', order: 8 },
  };

  var profile = useSelector((state) => {
    return state.signature.profile;
  });

  const handleChange = (name, value) => {
    dispatch(updateProfile({ name, value }));
  };

  const inputHtml = (inputName, inputVal, placeholder, type = 'text') => {
    if (type === 'checkbox') {
      return (
        <input
          id={`input-${inputName}`}
          type={type}
          className="mt-3"
          checked={inputVal}
          onChange={(e) => handleChange(inputName, e.target.checked)}
        />
      );
    }
    return (
      <input
        id={`input-${inputName}`}
        className="input"
        type={type}
        placeholder={placeholder}
        style={{ width: '300px' }}
        value={inputVal || ''}
        onChange={(e) => handleChange(inputName, e.target.value)}
      />
    );
  };

  const renderHtmlForInputs = (formInputs, placeholders, values) => {
    return Object.entries(formInputs)
      .sort((a, b) => a[1].order - b[1].order)
      .map((obj) => ({ key: obj[0], ...omit(obj[1], 'order') }))
      .map((inputObj) => {
        const inputName = inputObj.key;
        const { label, type = 'text', required = false } = labels[inputName];
        return (
          <div className="field is-horizontal" key={inputName}>
            <div className="field-label is-normal">
              <label
                className="label field-label"
                htmlFor={`input-${inputName}`}
              >
                {label}
                {required ? (
                  <span title="Required" style={{ color: 'red' }}>
                    *
                  </span>
                ) : null}
              </label>
            </div>
            <div className="field-body">
              <div className="control">
                {inputHtml(
                  inputName,
                  values[inputName],
                  placeholders[inputName],
                  type
                )}
              </div>
            </div>
          </div>
        );
      });
  };

  const inputs = renderHtmlForInputs(formInputs, placeholders, profile);

  return (
    <div className="content">
      <h3 className="title">Your details</h3>
      <form>
        {inputs}
        <hr />
        <SignatureContainer {...profile} />
      </form>
    </div>
  );
};

export default Form;
