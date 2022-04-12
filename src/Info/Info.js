import React, {Component} from 'react';

const Info = () => {

    return (
      <div className="content">
        <h3 className="title">Create your signature</h3>
        <ol>
          <li>Enter your details.</li>
          <li>Click the "Copy Signature" button</li>
          <li>Open outlook</li>
          <li>
            <a
              style={{ fontWeight: 'bold', textDecoration: 'underline' }}
              href="https://support.office.com/en-us/article/create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
              rel="noopener noreferrer"
              target="_blank"
            >
              Paste selection into signature editor
            </a>
            <ul
              style={{
                margin: '0',
                paddingLeft: '1rem',
                listStyleType: 'none',
                paddingTop: '0.5rem'
              }}
            >
              <li style={{ marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>Windows: </span>
                File > Options > Mail > Signatures
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>Mac: </span>
                Outlook > Preferences > Signatures
              </li>
              <li>
                <span style={{ fontWeight: 'bold' }}>
                  Outlook web access (OWA):{' '}
                </span>
                Cog (top-right) > "View all Outlook settings" link (bottom) > Mail > Compose and reply > Email signature
              </li>
            </ul>
          </li>
        </ol>
        <br />
      </div>
    );
}

export default Info;
