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
    title: { label: 'Job Title or Team' },
    email: { label: 'Email', type: 'email', required: true },
    phone: { label: 'Phone', type: 'tel' },
    mobile: { label: 'Mobile', type: 'tel', required: true },
    location: {
      label: 'Location',
      type: 'select',
      options: constants.locations,
    },
    twitter: { label: 'Twitter' },
    qualifications: { label: 'Qualifications' },
    addGot5: { label: 'Add #Got5', type: 'checkbox' },
    useAnimatedLogo: {
      label: 'Use animated logo',
      type: 'checkbox',
    },
    supportHotline: { label: 'Support Hotline', type: 'tel', required: true },
    supportEmail: { label: 'Support Email', type: 'email', required: true },
  };

  let formInputs = {
    name: { text: '', order: 2 },
    pronoun: { text: '', order: 3 },
    title: { text: '', order: 4 },
    location: { text: '', order: 5 },
    qualifications: { text: '', order: 6 },
    mobile: { text: '', order: 7 },
    email: { text: '', order: 8 },
    twitter: { text: '', order: 9 },
    addGot5: { text: false, order: 10 },
    useAnimatedLogo: { text: false, order: 11 },
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
    if (type === 'select') {
      return (
        <div className="select">
          <select
            id={`input-${inputName}`}
            style={{ width: '300px' }}
            defaultValue=""
            onChange={(e) => handleChange(inputName, e.target.value)}
          >
            <option value="">Leave blank</option>
            {labels[inputName].options.map((location) => (
              <option value={location}>{location}</option>
            ))}
          </select>
        </div>
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
    <form>
      {inputs}
      <hr />
      <SignatureContainer {...profile} />
    </form>
  );
};

export default Form;
