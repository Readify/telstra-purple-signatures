import React from 'react';

const Info = () => (
  <div>
    <h3>Create your signature</h3>
    <ol>
      <li>Enter your details.</li>
      <li>Click the "Copy Signature" button</li>
      <li>Open outlook</li>
      <li>
        <a
          style={{ fontWeight: 'bold', textDecoration: 'underline' }}
          href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
          rel='noopener noreferrer'
          target="_blank">
          Paste selection into signature editor
        </a>
        <ul style={{ paddingLeft: '1rem', listStyleType: 'none', paddingTop: '0.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Windows: </span>
            Signature > Signatures from the Message menu
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Mac: </span>
            Preferences > Signatures from the Message menu
          </li>
        </ul>
      </li>
    </ol>
    <br/>
  </div>
);

export default Info;